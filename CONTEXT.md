This document provides an overview of the `ai-agent` project, outlining its current purpose, established technical foundations, typical directory structure, and implemented conventions.

## What this project does

The `ai-agent` project is designed to implement an intelligent, autonomous or semi-autonomous agent. It leverages Large Language Models (LLMs) to understand natural language, perform reasoning, plan actions, utilize tools, and achieve specific objectives, often interacting with users or external systems. This encompasses tasks such as information retrieval, task automation, creative content generation, or complex problem-solving.

## Tech Stack and Architecture

The current architecture and tech stack involve:

*   **Core Language:** Predominantly Python, due to its rich ecosystem for AI/ML.
*   **LLM Integration:** Primarily utilizes APIs for commercial LLMs, specifically **OpenAI**.
*   **Agent Framework:** Employs the **LangChain** framework for managing agent behavior, memory, and tool usage.
*   **Memory/State Management:** Utilizes **Redis** for short-term conversation history and **ChromaDB** as a vector store for Retrieval Augmented Generation (RAG) data.
*   **Tooling:** Integration with external APIs (e.g., search engines, calendars, code interpreters) or internal scripts as "tools" the agent can invoke.
*   **Deployment:** Containerized (e.g., Docker) for reproducibility and scalability.
*   **Interfaces:** Exposes a **REST API via FastAPI** for user interaction and external system integration.

The architecture is modular, separating concerns such as LLM interaction, tool definitions, memory management, and core agent reasoning logic.

## Key Directories and Their Purpose

The current structure for the AI agent project includes:

*   `src/` or `app/`: Contains the main application source code.
    *   `src/agents/`: Core agent implementations, orchestrators, and custom LangChain chains/agents.
    *   `src/tools/`: Definitions and implementations of external tools or internal functions callable by the agent.
    *   `src/llms/`: Abstractions and integrations for different LLM providers and models.
    *   `src/memory/`: Components for managing different types of agent memory.
    *   `src/config/`: Configuration management, default settings, and environment variable handling.
    *   `src/api/`: Exposes the agent's RESTful API.
    *   `src/prompts/`: Manages prompt templates and versions.
*   `tests/`: Unit, integration, and potentially end-to-end tests for agent components and overall behavior.
*   `data/`: Stores data assets such as prompts, example inputs/outputs, embedding data, or RAG source documents.
*   `docs/`: Project documentation, architectural decisions, and usage instructions.
*   `scripts/`: Utility scripts for setup, data preprocessing, deployment, or running specific tasks.
*   `frontend/` (Optional): Dedicated directory for a web-based user interface, if applicable.

## Important Conventions or Patterns

*   **Modularity and Abstraction:** Core components are highly modular, abstracting away specific LLM providers, tool implementations, and memory backends to ensure flexibility and testability.
*   **Configuration-Driven:** All critical parameters (API keys, model names, database connections, prompt templates) are externalized through environment variables or structured configuration files.
*   **Asynchronous Operations:** Given the I/O-bound nature of LLM and external tool calls, asynchronous programming (e.g., Python's `asyncio`) is highly encouraged for responsiveness and concurrency.
*   **Robust Error Handling:** Agents must gracefully handle failures from LLM APIs, tool executions, and external services, incorporating retry mechanisms or fallback strategies.
*   **Comprehensive Logging:** Detailed logging is crucial for debugging agent decision-making processes, tracing execution flows, and monitoring performance.
*   **Observability and Tracing:** Emphasize robust observability practices, including tracing agent decision paths and LLM calls, to understand and debug complex interactions.
*   **Prompt Engineering Best Practices:** Prompts should be version-controlled, clearly documented, and designed for clarity, effectiveness, and injection safety.
*   **Testing Culture:** Emphasize rigorous testing of tool interfaces, agent logic, and critical decision paths to ensure predictable and correct behavior.