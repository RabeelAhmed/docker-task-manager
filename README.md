# 🐳 Dockerized MERN Task Manager

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

A fully Dockerized full-stack **Task Manager** built with the **MERN stack**, orchestrated with Docker Compose and served through an **Nginx reverse proxy** — simulating a production-like environment. Built as a hands-on project to master Docker fundamentals.

## ✨ Features

- ✅ **Full CRUD** — Create, read, toggle-complete, and delete tasks
- 🐳 **Fully Dockerized** — Every service runs in its own isolated container
- 🔀 **Nginx Reverse Proxy** — Single entry point on port 80; no raw backend ports exposed
- 💾 **Data Persistence** — MongoDB volume ensures tasks survive container restarts
- 🌐 **Container Networking** — Services communicate via Docker bridge network using service names

## 🎯 Learning Objectives

The primary goal of this repository is to demonstrate practical containerization skills:
- **Writing Dockerfiles**: Creating optimized custom images for Node.js backend and React frontend applications.
- **Docker Compose**: Orchestrating multiple containers (Nginx, Frontend, Backend, Database) to run together smoothly with a single command.
- **Nginx Reverse Proxy**: Using Nginx as the single entry point to route traffic to the correct service based on the request path.
- **Container Networking**: Making containers communicate with each other using service names over a shared Docker bridge network.
- **Data Persistence**: Implementing Docker Volumes so that MongoDB data isn't lost when containers are stopped.
- **Environment Variables**: Passing configuration securely into containers at runtime.

## 🛠️ Tech Stack

- **Frontend**: React.js (Containerized via `client/Dockerfile`)
- **Backend**: Node.js & Express.js (Containerized via `server/Dockerfile`)
- **Database**: MongoDB (Official Docker Hub Image)
- **Reverse Proxy**: Nginx (`nginx:alpine` image)
- **Infrastructure**: Docker & Docker Compose

## 🏗️ Architecture

All traffic flows through Nginx, which acts as the single entry point on port `80`. It routes requests internally to the appropriate container using Docker service names — no other ports are exposed to the host.

```text
User (Browser)
      ↓
 Nginx :80  (Reverse Proxy — single entry point)
      ↓
  ┌───┴───────────────────────┐
  │                           │
  ▼                           ▼
React Frontend          Node.js API (/api)
 (client:3000)          (server:5000)
                              ↓
                          MongoDB
                         (mongo:27017)
```

**Routing rules (defined in `nginx/default.conf`):**

| Request Path | Proxied To          |
|--------------|---------------------|
| `/`          | React Frontend      |
| `/api`       | Node.js Backend API |

## 🚀 How to Run the Project

Running this entire full-stack application requires zero local setup besides installing Docker.

### Prerequisites
- [Docker](https://www.docker.com/get-started) and Docker Compose installed.

### Steps
1. Clone this repository.
2. Open a terminal in the root folder (where `docker-compose.yml` is located).
3. Run the following command to build the images and start all containers:
   ```bash
   docker-compose up --build
   ```
4. Once all containers are running, open your browser and navigate to:
   - **Application**: [http://localhost](http://localhost) ← only port you need!

### Stopping the Application
To stop the containers gracefully, press `Ctrl + C` in the terminal.

To completely remove the containers and the network, run:
```bash
docker-compose down
```
*(Note: Because of Docker Volumes, your task data in MongoDB will remain saved even after you run this command!)*

## 📂 Directory Structure

```text
task-manager/
 ├── client/                  (React Frontend)
 │    ├── src/
 │    └── Dockerfile
 ├── server/                  (Node.js + Express Backend)
 │    ├── routes/
 │    ├── models/
 │    └── Dockerfile
 ├── nginx/
 │    └── default.conf        (Nginx reverse proxy configuration)
 ├── docker-compose.yml       (Orchestrates all four services)
 └── README.md
```

---
*Created as a hands-on project to master Docker fundamentals, including Nginx reverse proxying and multi-container orchestration.*
