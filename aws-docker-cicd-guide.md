# 🚀 AWS + Docker + CI/CD Deployment Guide

## 📌 Overview

This document describes a complete end-to-end deployment pipeline:

```
Code → GitHub → CI/CD → Docker → AWS EC2 → Nginx → Domain → HTTPS
```

---

## 🧱 Module 0 — Basic App Setup

* Created Node.js + Express app
* Routes:

  * `/` → Hello message
  * `/health` → status check

---

## 🐳 Module 1 — Dockerization

* Created Dockerfile
* Built image:

  ```
  docker build -t simple-node-app .
  ```
* Ran container:

  ```
  docker run -p 3000:3000 simple-node-app
  ```

---

## 🔗 Module 2 — Docker Compose

* Created `docker-compose.yml`

* Added:

  * App service
  * Redis service (optional)

* Command:

  ```
  docker-compose up -d
  ```

---

## ☁️ Module 3 — AWS EC2 Setup

* Launched Ubuntu EC2 instance

* Opened ports:

  * 22 (SSH)
  * 80 (HTTP)
  * 3000 (App)

* Connected using:

  ```
  ssh -i key.pem ubuntu@IP
  ```

---

## 🚀 Module 4 — Manual Deployment

* Cloned GitHub repo

* Installed dependencies:

  ```
  npm install
  ```

* Ran app:

  ```
  npm start
  ```

* Used PM2 for background process

---

## 🐳 Module 5 — Docker Deployment

* Installed Docker on EC2
* Built image on server
* Ran container:

  ```
  docker run -d -p 3000:3000 simple-node-app
  ```

---

## 🔄 Module 6 — CI/CD Pipeline

Using GitHub Actions:

* On push:

  * Build Docker image
  * Push to Docker Hub
  * SSH into EC2
  * Pull latest image
  * Restart container

---

## 🌐 Nginx Reverse Proxy

Installed Nginx:

```
sudo apt install nginx
```

Configured:

```
server {
    listen 80;
    server_name api.domain.com;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

---

## 🌍 Domain + DNS (Cloudflare)

* Added A record:

  ```
  api → EC2 IP
  ```
* Proxy: DNS only

---

## 🔒 HTTPS Setup

Installed Certbot:

```
sudo apt install certbot python3-certbot-nginx
```

Generated SSL:

```
sudo certbot --nginx -d api.domain.com
```

---

## 🧠 Final Architecture

```
User → Domain → Cloudflare DNS → EC2 → Nginx → Docker App
```

---

## 💰 Cost Optimization (IMPORTANT)

### Always Cleanup After Use:

* Terminate EC2 instance
* Delete EBS volumes
* Release Elastic IP

### Avoid:

* Leaving instances running
* Unused resources

---

## 🎯 Key Learnings

* Containerization with Docker
* CI/CD automation
* Cloud deployment (AWS)
* Reverse proxy (Nginx)
* HTTPS setup (SSL)
* DNS management

---

## 🚀 Future Improvements

* Zero downtime deployment
* Logging & monitoring
* Laravel integration
* Redis & queues
* Load balancing

---
