# Task Management App - Frontend

## Overview
This is the **frontend** of a simple **Task Management App** built using **React.js (Vite)**. It allows users to:

- Add, edit, delete tasks
- Toggle task status (Pending/Completed)
- Enable **Dark Mode** for better user experience

The frontend interacts with a **Node.js + Express** backend to store tasks in a **MongoDB** database.

## Features
✅ **Add new tasks**  
✅ **Edit task title**  
✅ **Delete tasks**  
✅ **Mark tasks as Completed/Pending**  
✅ **Dark Mode Toggle**  
✅ **Responsive UI using Tailwind CSS**  

## Tech Stack
- **React.js (Vite)** - Frontend framework
- **Axios** - API calls
- **Tailwind CSS** - Styling
- **React Hooks** - State management

## Installation & Setup
Follow these steps to set up and run the frontend:

### 1️⃣ Clone the Repository
```sh
 git clone <your-repo-url>
```

### 2️⃣ Navigate to the Frontend Directory
```sh
 cd frontend
```

### 3️⃣ Install Dependencies
```sh
 npm install
```

### 4️⃣ Start the Development Server
```sh
 npm run dev
```

The app should now be running at:  
➡ **http://localhost:5173**

## Environment Variables
Create a `.env` file in the `frontend` folder and set the backend API URL:
```sh
VITE_API_URL=http://localhost:5000
```

## Project Structure
```
frontend/
│── src/
│   ├── components/
│   │   ├── TaskList.jsx
│   │   ├── TaskForm.jsx
│   │   ├── DarkModeToggle.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│── package.json
│── vite.config.js
```

## API Endpoints Used
| Method | Endpoint         | Description |
|--------|----------------|-------------|
| GET    | /tasks          | Fetch all tasks |
| POST   | /tasks          | Add a new task |
| PUT    | /tasks/:id      | Edit a task (title/status) |
| DELETE | /tasks/:id      | Delete a task |

## Contributing
Feel free to fork this repo and submit a pull request with improvements! 🚀

## License
This project is open-source under the **MIT License**.

---
Made with ❤️ by **Harshit Shukla**

