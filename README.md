# 🐳 Dockerized MERN Task Manager

Welcome to my **Docker Learning Project**! I built this full-stack application to deepen my understanding of Docker, containers, and orchestration using Docker Compose.

This project is a fully functional Task Manager built with the **MERN Stack** (MongoDB, Express, React, Node.js), where every service runs in its own isolated Docker container and communicates securely over a Docker network.

## 🎯 Learning Objectives

The primary goal of this repository is to demonstrate practical containerization skills:
- **Writing Dockerfiles**: Creating optimized custom images for Node.js backend and React frontend applications.
- **Docker Compose**: Orchestrating multiple containers (Frontend, Backend, Database) to run together smoothly with a single command.
- **Container Networking**: Making containers communicate with each other using service names (e.g., the backend connects to `mongodb://mongo:27017` instead of `localhost`).
- **Data Persistence**: Implementing Docker Volumes so that MongoDB data isn't lost when containers are stopped.
- **Environment Variables**: Passing configuration securely into containers at runtime.

## 🛠️ Tech Stack

- **Frontend**: React.js (Containerized via `client/Dockerfile`)
- **Backend**: Node.js & Express.js (Containerized via `server/Dockerfile`)
- **Database**: MongoDB (Official Docker Hub Image)
- **Infrastructure**: Docker & Docker Compose

## 🚀 How to Run the Project

Running this entire full-stack application requires zero local setup besides installing Docker. You don't even need Node.js or MongoDB installed on your host machine!

### Prerequisites
- [Docker](https://www.docker.com/get-started) and Docker Compose installed.

### Steps
1. Clone this repository.
2. Open a terminal in the root folder (where `docker-compose.yml` is located).
3. Run the following command to build the images and start the containers:
   ```bash
   docker-compose up --build
   ```
4. Once the containers are running, you can access the apps:
   - **Frontend UI**: [http://localhost:3000](http://localhost:3000)
   - **Backend API**: [http://localhost:5000](http://localhost:5000)

### Stopping the Application
To stop the containers gracefully, press `Ctrl + C` in the terminal.

To completely remove the containers and the default network, run:
```bash
docker-compose down
```
*(Note: Because of Docker Volumes, your task data in MongoDB will remain saved even after you run this command!)*

## 📂 Architecture Overview

```text
task-manager/
 ├── client/                  (React Frontend Code)
 │    └── Dockerfile          (Build instructions for the React container)
 ├── server/                  (Node.js + Express Backend Code)
 │    └── Dockerfile          (Build instructions for the Node.js container)
 ├── docker-compose.yml       (The magic file that ties it all together)
 └── README.md
```

---
*Created as a hands-on project to master Docker fundamentals.*
