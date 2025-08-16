# 📝 Task Tracker Backend

A simple **Task Tracker API** built with **Node.js, Express, and MongoDB**.  
This project provides a RESTful API for creating, reading, updating, and deleting tasks.

---

## 🚀 Features
- Create new tasks with title, description, status, and due date
- Get all tasks
- Update task details or status
- Delete tasks
- MongoDB database integration
- REST API ready to connect with any frontend (React, Vue, Angular, etc.)

---

## 📂 Project Structure
task-tracker/
│── server.js
│── .env
│── package.json
│── Task.js
│── taskRoutes.js
│── controllers
└── taskController.js


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/task-tracker.git
cd task-tracker

2. Install dependencies
npm install

3. Configure environment variables

Create a .env file in the project root:

MONGO_URI=mongodb://localhost:27017/task-tracker
PORT=5000

4. Run the server

For development (with auto-restart):

npm run dev


For production:

npm start

🛠️ API Endpoints

Base URL: http://localhost:5000/api/tasks

1. Get all tasks
GET /api/tasks

2. Create a new task
POST /api/tasks


Request body (JSON):

{
  "title": "Learn Node.js",
  "description": "Follow tutorial",
  "status": "in-progress",
  "dueDate": "2025-08-20"
}

3. Update a task
PUT /api/tasks/:id


Request body (JSON):

{
  "status": "done"
}

4. Delete a task
DELETE /api/tasks/:id

📦 Dependencies

Express - Web framework

Mongoose - MongoDB ODM

CORS - Handle cross-origin requests

dotenv - Environment variables

Nodemon - Dev tool (auto-restart server)
