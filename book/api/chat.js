import fs from "fs";
import path from "path";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export default async function handler(req, res) {
  const { question } = req.body;

  let allText = "";
  const docsPath = path.join(process.cwd(), "docs/modules");

  function readFolder(folder) {
    const files = fs.readdirSync(folder);
    for (let f of files) {
      const full = path.join(folder, f);
      if (fs.statSync(full).isDirectory()) readFolder(full);
      else if (f.endsWith(".md")) {
        allText += fs.readFileSync(full, "utf8") + "\n";
      }
    }
  }

  readFolder(docsPath);

  const result = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are an AI tutor. Answer from the book only." },
      { role: "user", content: `Book:\n${allText}\nQuestion: ${question}` },
    ],
  });

  res.json({ answer: result.choices[0].message.content });
}
