# 🧾 Invoice Generator (Frontend)

🚀 [Live Demo](https://invoice-generator-frontend-theta-ten.vercel.app)

> A modern, secure, full-stack **invoice generator** built to simplify billing, improve record keeping, and eliminate manual invoice handling for freelancers and businesses.

---

## 📌 Overview

The Invoice Generator lets users:

- ✏️ Create customized invoices in minutes  
- 💾 Save invoice records securely  
- 📤 Upload company logos  
- 📧 Send invoices via email  
- 🖨️ Generate printable invoice previews

---

## 🧑‍💻 Tech Stack

| Category             | Technologies                             |
|----------------------|------------------------------------------|
| **Frontend**         | React, Vite, Tailwind CSS                |
| **State Management** | React Context API                        |
| **Backend**          | Spring Boot (Java 21)                    |
| **Database**         | MongoDB Atlas                            |
| **Cloud Storage**    | Cloudinary (for logo/image uploads)      |
| **Authentication**   | Clerk.dev (JWT-based authentication)     |
| **Deployment**       | Vercel (Frontend), Railway (Backend)     |
| **Version Control**  | Git & GitHub                             |

---

## 🔐 Features & Security

- 🔒 Secure authentication with Clerk.dev (JWT)
- 🌐 CORS configured for cross-origin requests
- 🔑 Credentials managed via `.env` & GitHub secrets
- ☁️ Cloudinary handles secure image uploads

---

## 🧰 Tools Used

- 📦 **Cloudinary** – For image/logo uploads  
- 🚀 **Vercel** – Frontend deployment  
- ⚙️ **Railway** – Backend deployment  
- 🛡️ **Clerk** – Authentication & user management  
- 📁 **MongoDB Atlas** – Cloud-hosted NoSQL database  
- 🔧 **GitHub** – Source control

---

## 🧠 Why Use This?

- ✅ Saves time — create and manage invoices fast  
- ✅ Professional look — clean PDF preview and print  
- ✅ Cloud-first — accessible from anywhere  
- ✅ Secure — Clerk JWT-based auth  
- ✅ Modern stack — built with real-world tools

---

## 🧪 Setup Locally (Frontend)

### Prerequisites

- Node.js v16+ and npm installed

### Steps

```bash
# Clone the repository
git clone https://github.com/naveenrhindi/invoice-generator-client.git
cd invoice-generator-client

# Install dependencies
npm install

# Create .env file
VITE_API_BASE_URL=https://your-backend-url/api

# Run the app
npm run dev

