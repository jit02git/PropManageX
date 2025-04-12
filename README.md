# 🏠 PropManageX

A clean, full-stack **Property Management App** with property CRUD operations, category filtering, and a responsive UI. Built with **Next.js**, **Node.js**, and **MongoDB**, leveraging modern tools like **Tailwind CSS**, **Redux Toolkit**, and **TanStack Query**.

---

## 🚀 Features

- 🔨 Create, read, update, and delete properties
- 🔍 Filter properties by category (e.g., Apartment, Villa, Studio)
- 🧾 View single property details
- 🧱 Reusable UI components
- ⚡ Smooth API interaction with TanStack Query
- 🌐 State management using Redux Toolkit
- 🎨 Fully responsive design using Tailwind CSS

---

## 🧱 Tech Stack

### Frontend
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Redux Toolkit](https://redux-toolkit.js.org/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)

---

## 🔌 API Endpoints

| Method | Endpoint               | Description                                  |
|--------|------------------------|----------------------------------------------|
| GET    | `/api/properties`      | Get all properties (supports `?category=`)   |
| POST   | `/api/properties`      | Create a new property                        |
| GET    | `/api/properties/:id`  | Get a single property                        |
| PUT    | `/api/properties/:id`  | Update an existing property                  |
| DELETE | `/api/properties/:id`  | Delete a property                            |

---

## 📁 Folder Structure (suggested)

