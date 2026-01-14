
# Imagify 

Imagify is a **full‑stack AI Image Generator application** that converts text prompts into stunning images using AI.  
It includes **authentication, credit-based image generation, and Razorpay payments**, built with the MERN stack.

---

## 🚀 Features

- 🔐 User Authentication (Register / Login with JWT)
- 🎨 Text-to-Image Generation using **ClipDrop AI API**
- 💳 Credit-based system (Free & Paid credits)
- 💰 Razorpay Payment Integration
- ⚡ Fast & Responsive UI with **React + Vite**
- 🎥 Smooth animations using **Framer Motion**
- 🌐 RESTful API using **Node.js & Express**
- 🗄️ MongoDB for data storage

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Axios
- Framer Motion

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Razorpay SDK

### AI
- ClipDrop Text‑to‑Image API

---

## 📁 Project Structure

```
AI-Image-Generator-App/
│
├── client/          # Frontend (React + Vite)
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/          # Backend (Node + Express)
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middlewares/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **server** folder:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API_KEY=your_clipdrop_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
CURRENCY=INR
```

⚠️ **Never commit `.env` files to GitHub**

---

## ▶️Getting Started (Local Setup)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/AI-Image-Generator-App.git
cd AI-Image-Generator-App
```

---

### 2️⃣ Backend Setup
```bash
cd server
npm install
npm run server
```

Backend will run on:  
📍 **http://localhost:4000**

---

### 3️⃣ Frontend Setup
```bash
cd client
npm install
npm run dev
```

Frontend will run on:  
📍 **http://localhost:5173**

---

## 💳 Payment Flow (Razorpay)

- Order created on backend
- Razorpay checkout opens on frontend
- Payment verified on backend
- Credits added after successful payment

---

## 🛡️ Security

- Passwords hashed using **bcrypt**
- JWT-based protected routes
- Secure payment verification
---

## 🧑‍💻 Author

**Asrith Raju**  
GIthub:@asrith-raju

---

## 📜 License

This project is licensed under MIT License

---

## ⭐ Support

If you like this project:
- ⭐ Star the repo - it really helps
