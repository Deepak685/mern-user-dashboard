# 🚀 MERN User Management Dashboard

A responsive and full-stack **User Management Dashboard** built with the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). This app allows you to **add, edit, delete**, and **view users** with real-time updates and full MongoDB integration.

---

## 📸 Preview

> Add a screenshot here if available (optional)

---

## 📋 Features

- 📄 Display user list with Name, Email, Phone, Age
- ➕ Add new user using modal popup form
- ✏️ Edit existing user with pre-filled form
- ❌ Delete user with confirmation
- ✅ Form validation (email, phone, age)
- ☁️ MongoDB Atlas for cloud-based database
- 🔁 RESTful API with Express.js
- ⚛️ React functional components with Hooks

---

## 🛠️ Technologies Used

### Frontend:
- React.js
- Axios
- CSS / Bootstrap (optional)

### Backend:
- Node.js
- Express.js
- Mongoose
- MongoDB Atlas

---

## 📁 Project Structure

mern-user-dashboard/
├── backend/
│ ├── config/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ └── index.js
│ └── public/
├── README.md

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-user-dashboard.git
cd mern-user-dashboard
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
👉 Create .env file inside backend folder:
ini
Copy
Edit
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
Start backend server:

bash
Copy
Edit
node server.js
3. Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
The app will open on http://localhost:3000.

🔐 API Endpoints
Method	Endpoint	Description
GET	/users	Fetch all users
POST	/users	Add a new user
PUT	/users/:id	Update existing user
DELETE	/users/:id	Delete a user

🧪 Validation & Error Handling
All fields are required.

Email must be in valid format.

Phone must be 10 digits.

Age must be between 1 and 100.

Handles form errors, server errors, and DB connection failures.

📦 Deployment (Optional)
Frontend: Vercel / Netlify

Backend: Render / Railway
