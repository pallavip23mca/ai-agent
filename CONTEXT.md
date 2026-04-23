```markdown
# Project Context: ai-agent

This document provides an overview of the `ai-agent` project, detailing its purpose, technical architecture, key directory structure, and established conventions.

## 1. What this project does

The `ai-agent` project aims to develop a sophisticated artificial intelligence agent capable of understanding, processing, and executing tasks, potentially with a degree of autonomy. It involves:
*   **Task Execution**: Performing specific actions or workflows based on given objectives.
*   **Tool Integration**: Interacting with external APIs, services, or internal systems to gather information or achieve goals.
*   **Reasoning & Planning**: Utilizing AI models (e.g., Large Language Models) for decision-making, task decomposition, and strategy formulation.
*   **Memory & State Management**: Maintaining context, learning from past interactions, and managing conversational or operational state.

Specifically, the agent is being developed to function as an intelligent **internal data analysis assistant**, capable of querying internal databases, generating reports, and providing insights based on user prompts.

## 2. Tech Stack and Architecture

Given the nature of an AI agent, the project typically leverages the following technologies:

*   **Primary Language**: Python (standard for AI/ML development).
*   **Core AI Frameworks**:
    *   **Agent Orchestration**: LangChain for managing agent logic, tools, and memory.
    *   **Machine Learning**: Potentially PyTorch, TensorFlow, Hugging Face Transformers for specific model inference, fine-tuning, or embeddings.
*   **Web Framework (if applicable)**: FastAPI for building RESTful APIs to expose agent functionalities, or a web UI.
*   **Dependency Management**: Poetry or `pip` with `requirements.txt` / `Pipfile`.
*   **Containerization**: Docker for consistent development and deployment environments.
*   **Cloud Infrastructure**: (Potential) Deployment on AWS, GCP, Azure using services like Kubernetes, serverless functions (e.g., AWS Lambda), or managed VMs.
*   **Memory Store**: ChromaDB (for vector embeddings and long-term memory) and Redis (for short-term conversational state/cache).

**Architecture**: The system likely follows a modular or service-oriented architecture:
*   **Agent Core**: Encapsulates the primary reasoning, planning, and task execution logic.
*   **Tool Registry/Connectors**: Modules for interfacing with external APIs and services (e.g., databases, SaaS tools, internal microservices).
*   **Memory Layer**: Abstraction for interacting with various memory stores.
*   **API/Service Layer**: (Optional) Exposes the agent's capabilities via a programmatic interface.

## 3. Key Directories and their Purpose

*   `src/` or `app/`: Contains the main application source code.
    *   `src/agent/`: Core agent logic, task execution, and reasoning modules.
    *   `src/tools/`: Definitions and implementations for external tools the agent can use.
    *   `src/memory/`: Logic for interacting with the agent's memory store.
    *   `src/api/`: (If applicable) API endpoints for interacting with the agent.
    *   `src/config/`: Application configuration settings.
*   `models/`: Stores pre-trained AI models, model checkpoints, or model definition files.
*   `data/`: Sample data, input datasets, or generated data used by the agent.
*   `scripts/`: Utility scripts for setup, data processing, model training, or deployment.
*   `tests/`: Unit, integration, and end-to-end tests for the project.
*   `docs/`: Additional project documentation (beyond `README.md`).
*   `.github/workflows/`: (If applicable) GitHub Actions for CI/CD.

## 4. Important Conventions or Patterns

*   **Code Style**: Adherence to PEP 8 for Python code, enforced by linters like Black or Flake8.
*   **Type Hinting**: Extensive use of type hints for improved readability, maintainability, and static analysis.
*   **Logging**: Structured logging (e.g., using Python's `logging` module) for observability, with clear log levels and contextual information.
*   **Configuration Management**: Configuration loaded from environment variables or dedicated config files (e.g., `.env`, YAML, TOML) for different environments.
*   **Dependency Injection**: Use of dependency injection principles, especially for tools and memory modules, to facilitate testing and modularity.
*   **Error Handling**: Robust error handling with clear exception types and informative error messages, ideally with retry mechanisms for transient failures.
*   **Testing**: Comprehensive test suite covering critical agent functionalities, tool integrations, and API endpoints, including mock external services where appropriate.
*   **Tool-Use Pattern**: Tools are typically defined with clear schemas and descriptions, allowing the agent to dynamically select and invoke them based on current goals.
*   **Prompt Engineering**: Prompts for large language models are carefully crafted, versioned (if necessary), and externalized from core logic to allow for easy iteration and optimization.
```