```markdown
# Project Context: ai-agent

This document provides an overview of the `ai-agent` project, outlining its purpose, current technical structure, and conventions.

## What this project does

The `ai-agent` project is an application designed to leverage Artificial Intelligence (AI) models to perform specific tasks. While the exact scope is not yet detailed, it is expected to involve:
*   **Task Automation**: Automating workflows or decision-making processes using AI.
*   **Interaction with AI Models**: Integrating with Large Language Models (LLMs) or other AI services (e.g., via APIs).
*   **Tool Usage**: Equipping the AI agent with external tools or functions to interact with its environment.
*   **Agentic Loops**: Implementing reasoning, planning, and execution cycles for autonomous or semi-autonomous operation.

## Tech Stack and Architecture

With the foundational setup complete, key technologies have been established.
*   **Language**: Python has been chosen as the primary development language, leveraging its extensive AI ecosystem.
*   **AI Frameworks**: LangChain is adopted as the primary framework for agent orchestration, providing structure for chaining components and interacting with models.
*   **Model Integration**: Initial integration targets the OpenAI API for Large Language Model (LLM) access. The architecture supports extension to other AI-as-a-Service providers or local LLMs.
*   **Architecture**: A modular design is being implemented, separating core agent logic from tools, memory management, and model interfaces. This follows a common pattern involving an agent orchestrator, a set of pluggable tools, and a memory component.

## Key Directories and Their Purpose (Current)

The current project structure, established to support modular development, includes:

*   `.`: Project root containing `README.md`, project configuration files (e.g., `pyproject.toml`, `requirements.txt`), and top-level documentation.
*   `src/`: Primary source code for the agent application.
    *   `src/agent/`: Core agent logic, including reasoning loops, planners, and the main execution flow.
    *   `src/tools/`: Definitions and implementations of tools/functions the agent can call.
    *   `src/models/`: Interfaces or wrappers for interacting with specific AI models.
    *   `src/memory/`: Components for agent memory management (e.g., short-term context, long-term memory).
    *   `src/config/`: Configuration management for environment variables, API keys, and agent parameters.
*   `tests/`: Unit, integration, and potentially end-to-end tests for the agent's components and overall behavior.
*   `data/`: Sample input data, evaluation datasets, or cached model outputs.
*   `docs/`: Additional documentation beyond the README, such as architectural diagrams or usage guides.

## Important Conventions or Patterns

*   **Modularity**: Components (agent core, tools, models, memory) should be loosely coupled, promoting reusability and testability.
*   **Configuration-Driven**: Agent behavior, API keys, and model parameters should be configurable, ideally via environment variables or dedicated configuration files, to support different environments and use cases.
*   **Prompt Engineering Best Practices**: Prompts should be clear, concise, and version-controlled. Consider using templating for dynamic prompt construction, especially with frameworks like LangChain.
*   **Observability**: Integrate robust logging and potentially tracing to understand agent decision-making, identify issues, and monitor performance.
*   **Testing & Evaluation**: Implement comprehensive tests, including unit tests for individual components and integration tests for agent workflows. AI-specific evaluation frameworks may be used to measure performance against benchmarks.
*   **Idempotency**: Where applicable, agent actions should be designed to be repeatable without unintended side effects, especially when interacting with external systems.
```