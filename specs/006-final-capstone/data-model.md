# Data Model for Physical AI & Humanoid Robotics Textbook Content

This document outlines the conceptual data model for the educational content within the *Physical AI & Humanoid Robotics* textbook. While not a traditional software data model, it defines the structure and relationships of the various components that constitute the learning material, ensuring consistency and reusability for AI-native features like the RAG chatbot.

## Entities

### 1. TextbookModule

*   **Description:** Represents a single chapter of the textbook, a self-contained unit of learning.
*   **Attributes:**
    *   `id` (string): Unique identifier (e.g., "M1", "M2").
    *   `title` (string): Chapter title (e.g., "ROS 2: The Robotic Nervous System").
    *   `overview` (text): A brief summary of the module's learning objectives.
    *   `prerequisites` (list of strings/references to `TextbookModule`): Modules or concepts required before starting this module.
    *   `expected_outcomes` (list of text): Skills or knowledge learners should acquire.
    *   `topics` (list of references to `Topic`): Key subjects covered within the module.
    *   `labs` (list of references to `Lab`): Hands-on exercises for the module.
    *   `diagrams` (list of references to `Diagram`): Visual aids.
    *   `code_snippets` (list of references to `CodeSnippet`): Inline code examples.

<h3>2. Topic</h3>

*   **Description:** A specific concept or sub-area within a `TextbookModule`.
*   **Attributes:**
    *   `id` (string): Unique identifier (e.g., "M2-T1-ROS2Arch").
    *   `name` (string): Name of the topic (e.g., "ROS 2 Architecture").
    *   `content` (text): Detailed explanation of the topic.
    *   `keywords` (list of strings): Important terms for indexing and search.
    *   `related_topics` (list of references to `Topic`): Links to other relevant topics.
    *   `code_snippets` (list of references to `CodeSnippet`): Relevant code examples.
    *   `diagrams` (list of references to `Diagram`): Relevant visual aids.

<h3>3. Lab</h3>

*   **Description:** A practical, hands-on exercise or project for learners.
*   **Attributes:**
    *   `id` (string): Unique identifier (e.g., "M3-L1-GazeboSetup").
    *   `title` (string): Title of the lab (e.g., "Setting up Gazebo Environment").
    *   `module_id` (reference to `TextbookModule`): The module this lab belongs to.
    *   `instructions` (text): Step-by-step guide for the lab.
    *   `expected_results` (text): What the learner should observe or achieve.
    *   `code_snippets` (list of references to `CodeSnippet`): Code specific to the lab.
    *   `assets` (list of URLs/references): Links to required files (e.g., URDF models, environment files).

<h3>4. CodeSnippet</h3>

*   **Description:** A block of executable code demonstrated in the textbook.
*   **Attributes:**
    *   `id` (string): Unique identifier.
    *   `language` (string): Programming language (e.g., "python", "cpp").
    *   `code` (text): The actual code block.
    *   `explanation` (text): Description of what the code does.
    *   `module_id` (reference to `TextbookModule`): The module it appears in.
    *   `topic_id` (reference to `Topic`, optional): The specific topic it illustrates.

<h3>5. Diagram</h3>

*   **Description:** A visual aid (e.g., text-based ASCII art, flowchart concept) to explain concepts.
*   **Attributes:**
    *   `id` (string): Unique identifier.
    *   `type` (string): Type of diagram (e.g., "flowchart", "architecture", "sequence").
    *   `content` (text): Text-based representation of the diagram.
    *   `caption` (text): A brief explanation of the diagram.
    *   `module_id` (reference to `TextbookModule`): The module it appears in.
    *   `topic_id` (reference to `Topic`, optional): The specific topic it illustrates.

## Relationships

*   `TextbookModule` HAS MANY `Topic`s.
*   `TextbookModule` HAS MANY `Lab`s.
*   `Topic` HAS MANY `CodeSnippet`s and `Diagram`s.
*   `Lab` HAS MANY `CodeSnippet`s.
*   `TextbookModule` HAS MANY `CodeSnippet`s and `Diagram`s (directly, or through its topics/labs).
*   `TextbookModule` MAY reference other `TextbookModule`s as `prerequisites`.

## Validation Rules (for AI-Native Features)

*   **Content Chunking:** Each `Topic`, `Lab`, and `CodeSnippet` is a potential chunk for the RAG chatbot.
*   **Personalization:** User interaction data will be tagged with `module_id`, `topic_id`, and `lab_id` to track learning progress.
*   **Translation:** All `content`, `title`, `overview`, `instructions`, `explanation`, and `caption` fields are translatable.

## State Transitions

*   `TextbookModule` status: Draft -> Under Review -> Published
*   `Lab` status: Draft -> Tested -> Verified