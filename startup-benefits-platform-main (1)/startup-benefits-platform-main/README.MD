# 🚀 Startup Benefits Platform

A full-stack web platform that helps startups discover, claim, and track exclusive SaaS deals.

Built as part of a **Full-Stack Developer**, with a focus on **clear user flow**, **secure backend logic**, and **high-quality but restrained UI/UX**.

---

## 🧭 Core Application Flow

The application enforces the following user journey:

1. User registers and logs in
2. User browses available deals (no login required)
3. Certain deals are locked and clearly communicate access restrictions
4. User can claim an eligible deal (authentication required)
5. Claimed deals appear in the user dashboard with status tracking

This flow is enforced both visually on the frontend and logically on the backend.

---

## ✨ Features

### 🔐 Authentication
- User registration and login using JWT
- Secure protected routes for claims and dashboard
- Minimal auth UI focused on usability

### 📦 Deals
- Browse all available deals
- Locked vs unlocked deals clearly distinguished
- Full deal details including partner and eligibility
- Search and clean listing UI

### 🧾 Claiming
- Claim eligible deals
- Backend prevents duplicate claims and unauthorized access
- Toast notifications for:
  - Already claimed deals
  - Verification required
  - Successful claims

### 📊 Dashboard
- Displays all claimed deals
- Shows real-time claim status (pending / approved / rejected)
- One-time onboarding hint for first-time users

---

## 🎨 UI / UX & Motion Design

The UI follows a premium SaaS style with emphasis on clarity.

Motion is used conservatively:
- Interactive deal cards with subtle 3D tilt
- Scroll-based section reveals (no scroll hijacking)
- Lightweight 3D hero visual using Three.js
- One-time motion-driven onboarding hint

Animation is only triggered by user intent.

---

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- react-hot-toast

### Backend
- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- JWT Authentication

---

## 📁 Project Structure

frontend/
  app/
    page.tsx
    deals/
    dashboard/
    login/
    register/
  components/
  lib/

backend/
  src/
    config/
    controllers/
    models/
    routes/
    server.ts

---

## 🔐 Environment Variables

Create a .env file in the backend directory:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  

---

## ▶️ Running the Project Locally

### Backend
cd backend  
npm install  
npm run dev  

### Frontend
cd frontend  
npm install  
npm run dev  

Frontend runs on http://localhost:3000  
Backend runs on http://localhost:5000  

---

## 🧠 Design Decisions

- Authentication is enforced only where required
- Backend is the single source of truth for deal access
- Motion enhances usability, not decoration
- UI prioritizes clarity over complexity

---

## ✅ Assessment Coverage Checklist

- Landing Page (animated, premium UI)
- Deals Listing Page
- Deal Details Page
- User Dashboard
- User Registration & Login
- Claiming Logic
- Status Tracking
- Optional UX Enhancements

---

## 👤 Author

Kunal Kumar  
Full-Stack Developer

EOF
