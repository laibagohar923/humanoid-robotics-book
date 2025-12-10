import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <style>{`
/* -------------------------------------- */
/* NAVBAR STYLING */
/* -------------------------------------- */
.navbar {
  background: #ffffff !important;
  color: #000 !important;
  border-bottom: 1px solid #e5e7eb;
}

.navbar__brand .navbar__title {
  color: #000 !important;
}

.navbar__brand:hover .navbar__title {
  color: #eab308 !important;
}

.navbar__link {
  color: #000 !important;
  font-weight: 600;
}

.navbar__link:hover {
  color: #eab308 !important;
  background: rgba(234, 179, 8, 0.15) !important;
  border-radius: 6px;
  transition: 0.25s ease-in-out;
}

.navbar__link--active {
  color: #eab308 !important;
}

.navbar__item svg,
.navbar__item button svg {
  fill: #000 !important;
}

/* -------------------------------------- */
/* HERO SECTION */
/* -------------------------------------- */

.heroSection {
  background: #000;
  padding: 120px 20px;
  color: white;
}

.heroContainer {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

.heroText {
  flex: 1;
  min-width: 300px;
}

.heroTitle {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
}

.heroSubtitle {
  font-size: 1.25rem;
  opacity: 0.85;
  margin-top: 15px;
  line-height: 1.6;
  max-width: 600px;
}

.heroButton {
  display: inline-block;
  margin-top: 30px;
  padding: 14px 32px;
  background: #facc15;
  color: #000;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.2s;
}

.heroButton:hover {
  background: #eab308;
}

/* Hero fade + slide animation */
@keyframes heroFadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply animation to h1 */
.heroTitle {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
  animation: heroFadeUp 0.9s ease-out forwards;
}

/* Apply animation to paragraph */
.heroSubtitle {
  font-size: 1.25rem;
  opacity: 0.85;
  margin-top: 15px;
  line-height: 1.6;
  max-width: 600px;
  animation: heroFadeUp 1.2s ease-out forwards; /* slower for nice delay */
}


.robotImage {
  flex: 1;
  min-width: 600px;
  max-width: 600px;
  border-radius: 12px;
}

/* -------------------------------------- */
/* WHITE SECTION */
/* -------------------------------------- */

/* Fade-in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animated heading */
.whiteHeading {
  font-size: 2.4rem;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  display: inline-block;
  position: relative;
  animation: fadeInUp 0.8s ease forwards;
  transition: color 0.3s ease, transform 0.3s ease;
}

/* Hover: yellow + slight lift */
.whiteHeading:hover {
  color: #eab308;
  transform: translateY(-4px);
}

/* Underline animation */
.whiteHeading::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0%;
  height: 3px;
  background: #eab308;
  transition: width 0.3s ease;
}

.whiteHeading:hover::after {
  width: 100%;
}

/* Paragraph styling */
.whiteSectionParagraph {
  color: #000 !important;
  opacity: 1 !important;
}

/* MODULES SECTION */
.modulesSection {
  background: #ffffff;
  padding: 60px 20px;
  text-align: center;
}

/* GRID */
.modulesGrid {
  max-width: 1200px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  color: #fff;
}

/* CARD BASE STYLE */
.moduleCard {
  background: #000;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(234, 179, 8, 0.25); /* soft yellow shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.7s ease forwards;
  border: 1px solid rgba(234, 179, 8, 0.15);
  color: #fff;
}

/* HOVER EFFECT */
.moduleCard:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 26px rgba(234, 179, 8, 0.45); /* stronger yellow glow */
}

/* TITLE */
.moduleCard h3 {
  font-size: 1.25rem;
  margin-bottom: 10px;
  font-weight: 700;
  color: #fff;
}

/* TEXT */
.moduleCard p {
  font-size: 1rem;
  line-height: 1.6;
  color: #fff;
  opacity: 0.85;
}

/* BUTTON */
.moduleButton {
  display: inline-block;
  margin-top: 15px;
  padding: 12px 70px;
  background: #facc15;
  color: #000;
  font-weight: 600;
  border-radius: 34px;
  text-decoration: none;
  transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}

/* BUTTON HOVER */
.moduleButton:hover {
  background: #eab308;
  transform: translateY(-3px);
  box-shadow: 0 6px 14px rgba(234, 179, 8, 0.35);
}

/* Fade animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
    
}

footer: {
  style: 'dark',
  links: [ ... ],
  copyright: ...
}




      `}</style>









      {/* HERO SECTION */}
      <header className="heroSection">
        <div className="heroContainer">
          <div className="heroText">
            <h1 className="heroTitle">Physical AI & Humanoid Robotics Textbook</h1>

            <p className="heroSubtitle">
              Master humanoid robotics, ROS 2, simulation, NVIDIA Isaac, VLA
              systems, and embodied AI to build next-generation intelligent
              machines.
            </p>

            <Link className="heroButton" to="/docs/modules/module1/">
              Start Reading →
            </Link>
          </div>

          {/* FIXED IMAGE PATH */}
          <img
            src="img/pic1.jpeg"
            alt="Humanoid Robot"
            className="robotImage"
          />
        </div>
      </header>

      {/* WHITE SECTION */}
      <section
        style={{
          background: "#ffffff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 className="whiteHeading">What This Textbook Covers</h2>

        <p
          className="whiteSectionParagraph"
          style={{
            fontSize: "1.2rem",
            maxWidth: "800px",
            margin: "20px auto 0",
            lineHeight: "1.8",
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          This is a complete AI-native engineering curriculum designed for
          physical AI, humanoid robots, embodied intelligence, ROS 2 programming,
          digital-twin simulations, and Vision-Language-Action (VLA) systems.
          Each module builds your robotics superpowers step by step.
        </p>
      </section>

      <section className="modulesSection">
  <h2 className="whiteHeading">Explore All Modules</h2>

  <div className="modulesGrid">

    <div className="moduleCard">
      <h3>Module 1: ROS 2 Foundations</h3>
      <p>Learn ROS 2: nodes, topics, services, actions, QoS, and complete robot workflows.</p>
      <a href="/humanoid-robotics-book/docs/modules/module1/" className="moduleButton">Open Module →</a>
    </div>

    <div className="moduleCard">
      <h3>Module 2: Simulation & Digital Twins</h3>
      <p>Master Gazebo, Unity Robotics, Isaac Sim, and robotic digital-twin training pipelines.</p>
      <a href="/humanoid-robotics-book/docs/modules/module2/" className="moduleButton">Open Module →</a>
    </div>

    <div className="moduleCard">
      <h3>Module 3: Hardware Foundations</h3>
      <p>Motors, actuators, torque control, sensors, microcontrollers — essential robotics hardware.</p>
      <a href="/humanoid-robotics-book/docs/modules/module3/" className="moduleButton">Open Module →</a>
    </div>

    <div className="moduleCard">
      <h3>Module 4: VLA — Vision, Language & Action</h3>
      <p>Advanced robotics AI: perception, LLM-control, action planners, and embodied intelligence.</p>
      <a href="/humanoid-robotics-book/docs/modules/module4/" className="moduleButton">Open Module →</a>
    </div>

    <div className="moduleCard">
      <h3>Module 5: Advanced AI & Motion Control</h3>
      <p>Reinforcement learning, MPC, motion planning, and intelligent robot movement.</p>
      <a href="/humanoid-robotics-book/docs/modules/module5/" className="moduleButton">Open Module →</a>
    </div>

    <div className="moduleCard">
      <h3>Module 6: Designing Humanoid Robots</h3>
      <p>Kinematics, actuation, morphologies, energy systems, and humanoid robot movement.</p>
      <a href="/humanoid-robotics-book/docs/modules/module6/" className="moduleButton">Open Module →</a>
    </div>
  </div>
</section>



    </>
  );
}

export default function Home() {
  return (
    <Layout title="Physical AI Textbook" description="Physical AI textbook">
      <HomepageHeader />
    </Layout>
  );
}
