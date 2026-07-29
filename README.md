# 📝 Dockerized Note-Taking App

A full-stack Note-Taking application built using **Node.js, Express.js, Prisma ORM, SQLite, PostgreSQL, Docker**, and a simple **HTML, CSS, and JavaScript** frontend. The project demonstrates RESTful API development, JWT authentication, CRUD operations, and containerized deployment.

## 🚀 Features

- User Authentication (JWT)
- Create, Read, Update & Delete Notes
- Secure REST APIs
- Prisma ORM
- SQLite & PostgreSQL support
- Dockerized setup

## 🛠️ Tech Stack

**Frontend**
- HTML
- CSS
- JavaScript

**Backend**
- Node.js
- Express.js
- Prisma ORM
- JWT
- Bcrypt

**Database**
- SQLite
- PostgreSQL

**DevOps**
- Docker
- Docker Compose

## 📁 Project Structure

```text
.
├── prisma/
├── public/
│   ├── index.html
│   ├── style.css
│   └── fanta.css
├── src/
│   ├── generated/
│   ├── middleware/
│   ├── routes/
│   ├── db.js
│   ├── prismaClient.js
│   └── server.js
├── Dockerfile
├── docker-compose.yaml
├── package.json
└── README.md
```

## ▶️ Run the Project

```bash
# Install dependencies
npm install

# Generate Prisma Client
npx prisma generate

# Run with Docker
docker compose up --build
```

## 📚 What I Learned

- Building RESTful APIs with Express.js
- JWT Authentication & Authorization
- CRUD operations using Prisma ORM
- Working with SQLite & PostgreSQL
- Dockerizing full-stack applications
- Connecting frontend and backend services
