# 📝 Online MCQ Exam System

An interactive web application for taking multiple-choice question (MCQ) exams online. Built with **React**, **Node.js**, **Express.js**, and **MongoDB**.

---

## 🚀 Features

- 👤 User Sign Up & Login (Basic authentication using username/password)
- 🧠 Take MCQ-based exams
- ✅ Real-time scoring after submission
- 📊 View available exams
- 🎨 Modern UI with professional backgrounds

---

## 🛠️ Tech Stack

- **Frontend:** React (with React Router)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Styling:** Inline styles with professional background images

---

## 📁 Project Structure

mcq-system-full/
│
├── backend/
│ ├── models/
│ │ ├── Exam.js
│ │ └── User.js
│ ├── routes/
│ │ ├── exams.js
│ │ ├── results.js
│ │ └── auth.js
│ └── app.js
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── LoginPage.jsx
│ │ │ ├── SignupPage.jsx
│ │ │ ├── ExamList.jsx
│ │ │ ├── ExamPage.jsx
│ │ │ └── ResultPage.jsx
│ │ ├── App.js
│ │ └── index.js


---

## ⚙️ Installation & Running

### 1️⃣ Backend

```bash
cd backend
npm install
node app.js
   
2️⃣ Frontend

cd frontend
npm install
npm start



🧪 Test Users
You can sign up using any username and password.

✨ Screenshots
🖥️ Login & Signup pages with beautiful backgrounds
      screenshots\login.png
      screenshots\signup.png
📘 Exam list
      screenshots\list.png
✅ Exam taking & submission
      screenshots\j1.png
      screenshots\j2.png
      screenshots\hc.png
      screenshots\p1.png
🏁 Final score shown with feedback
      screenshots\op1.png
      screenshots\op2.png

📌 Future Improvements
Admin panel for adding/editing exams

JWT-based authentication

Timer for each exam

Review answers after submission

