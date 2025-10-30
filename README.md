# 🥛 Milk Store API

A simple, production-style **NestJS** backend API for managing a milk store’s products, customers, and orders — built with **NestJS**, **Prisma ORM**, and **PostgreSQL**.

This project is intentionally designed **without JWT, Swagger, or tests** to keep it **easy to learn** and focused on **NestJS fundamentals**, **validation**, and **database integration**.

---

## 🚀 Project Overview

The **Milk Store API** demonstrates:

- Clean modular NestJS structure (Controllers, Services, Modules)
- Dependency Injection (DI)
- Data validation with `class-validator`
- Database access with **Prisma ORM**
- A simple relational model: Products, Customers, Orders

---

## 🧩 Features

| Feature                 | Description                                 |
| ----------------------- | ------------------------------------------- |
| 🥛 **Products**         | Add, list, update, and delete milk products |
| 👤 **Customers**        | Manage store customers                      |
| 🧾 **Orders**           | Create orders linked to customers           |
| ✅ **Validation**       | All input validated using DTOs              |
| 🗄️ **Database**         | PostgreSQL with Prisma ORM                  |
| 🧱 **Simple Structure** | No JWT, no Swagger, just clean CRUD         |

---

## ⚙️ Tech Stack

- **NestJS** – backend framework
- **Prisma ORM** – database toolkit
- **PostgreSQL** – relational database
- **class-validator** – request validation
- **dotenv** – environment management

---

## 🛠️ Installation & Setup

### 1️⃣ Clone and Install

```bash
git clone https://github.com/inkotany/milk-store-api.git
cd milk-store-api
npm install
```

---

### 2️⃣ Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/milkstore"
```

---

### 3️⃣ Initialize Prisma and Database

```bash
npx prisma migrate dev --name init
npx prisma generate
```

---

### 4️⃣ Run the Application

```bash
npm run start:dev
```

App will run at 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📦 API Routes Overview

### 🥛 **Products**

| Method   | Endpoint        | Description          |
| -------- | --------------- | -------------------- |
| `GET`    | `/products`     | List all products    |
| `POST`   | `/products`     | Create a new product |
| `PUT`    | `/products/:id` | Update a product     |
| `DELETE` | `/products/:id` | Delete a product     |

---

### 👤 **Customers**

| Method | Endpoint     | Description           |
| ------ | ------------ | --------------------- |
| `GET`  | `/customers` | List all customers    |
| `POST` | `/customers` | Create a new customer |

---

### 🧾 **Orders**

| Method | Endpoint  | Description        |
| ------ | --------- | ------------------ |
| `GET`  | `/orders` | List all orders    |
| `POST` | `/orders` | Create a new order |

##

---

##

## 🧠 Learning Outcomes

By completing this project, you’ll learn to:

- Build modular **NestJS** applications
- Use **Dependency Injection** for clean architecture
- Validate requests with **DTOs**
- Interact with **PostgreSQL** using **Prisma**
- Organize and structure real-world backend projects

---

## 📘 Next Steps (When Ready)

1. Add **JWT Authentication** for users
2. Implement **Swagger Documentation**
3. Add **Pagination and Filtering**
4. Deploy with **Docker** or **Render**
5. Integrate a **frontend (Next.js)** for the store

---

## 👨‍💻 Author

**Milk Store API**
Created by [inkotany](https://github.com/inkotany)
Made with ❤️ to learn NestJS + Prisma + PostgreSQL

Feel free to fork, star ⭐, and extend!
