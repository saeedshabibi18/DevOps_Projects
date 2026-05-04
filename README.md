# 🐳 DevOps Projects — Saeed Shabibi

A collection of hands-on DevOps projects demonstrating containerization, orchestration, and cloud-native application deployment.

---

## 📁 Projects

### 01 — Dockerized Node.js App with MongoDB & Mongo Express

> A fully containerized full-stack application using Docker and Docker Compose, with MongoDB as the database and Mongo Express as a visual database management UI.

**📌 What this project demonstrates:**
- Multi-container application setup using Docker Compose
- Container networking — app, database, and UI all communicating internally
- Service dependency management (`depends_on`)
- Environment variable configuration for secure credentials
- Port mapping and volume management

**🛠️ Tech Stack:**

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=flat-square&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)

**📂 Folder:** [`01-docker-nodejs-mongodb/`](./01-docker-nodejs-mongodb/)

**🚀 How to run:**
```bash
# Clone the repo
git clone https://github.com/saeedshabibi18/DevOps_Projects.git
cd DevOps_Projects/01-docker-nodejs-mongodb

# Start all containers
docker-compose up -d

# App runs on:    http://localhost:3000
# Mongo Express:  http://localhost:8081
```

**Architecture:**
```
┌─────────────┐     ┌─────────────┐     ┌──────────────┐
│  Node.js    │────▶│   MongoDB   │◀────│ Mongo Express│
│  (port 3000)│     │  (port 27017)│    │  (port 8081) │
└─────────────┘     └─────────────┘     └──────────────┘
        All running inside Docker network via Docker Compose
```

---

## 🔖 Topics / Keywords

`devops` `docker` `docker-compose` `mongodb` `nodejs` `containerization` `microservices` `cloud-native` `backend` `fresher-devops`

---

## 👨‍💻 About Me

Final-year B.Tech student specializing in **DevOps & Cloud Engineering**.
Currently seeking fresher/internship roles in DevOps and Cloud.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR-LINKEDIN-HERE)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](www.linkedin.com/in//saeed-shabibi1800)
