import { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import DarkModeToggle from "./components/DarkModeToggle";
import { CheckCircle, Star, Clock, BarChart3, Calendar } from 'lucide-react';
import "./index.css";

const API_URL = "https://task-mgnt-backend.vercel.app/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showFeatures, setShowFeatures] = useState(true);

  // Fetch tasks from the backend
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Add a new task
  const addTask = (task) => {
    axios.post(API_URL, task).then((res) => setTasks([...tasks, res.data]));
  };

  // Delete a task
  const deleteTask = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => setTasks(tasks.filter((t) => t._id !== id)));
  };

  // Update a task (edit title or status)
  const updateTask = (id, updatedTask) => {
    axios
      .put(`${API_URL}/${id}`, updatedTask)
      .then((res) => setTasks(tasks.map((t) => (t._id === id ? res.data : t))));
  };

  // Calculate stats for the dashboard
  const completedTasks = tasks.filter(t => t.status === "Completed").length;
  const pendingTasks = tasks.filter(t => t.status === "Pending").length;
  const completionRate = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto p-6">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              Task Manager
            </h1>
            <p className={`mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Organize, track, and complete your tasks efficiently
            </p>
          </div>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>

        {/* Dashboard Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 ${tasks.length === 0 ? 'hidden' : ''}`}>
          <div className={`p-4 rounded-lg shadow-md transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <div className="flex items-center">
              <BarChart3 className={`mr-3 ${darkMode ? "text-blue-400" : "text-blue-500"}`} size={24} />
              <div>
                <h3 className="text-lg font-medium">Task Summary</h3>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {completedTasks} completed, {pendingTasks} pending
                </p>
              </div>
            </div>
          </div>
          <div className={`p-4 rounded-lg shadow-md transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <div className="flex items-center">
              <CheckCircle className={`mr-3 ${darkMode ? "text-green-400" : "text-green-500"}`} size={24} />
              <div>
                <h3 className="text-lg font-medium">Completion Rate</h3>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {completionRate}% of tasks completed
                </p>
              </div>
            </div>
          </div>
          <div className={`p-4 rounded-lg shadow-md transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            <div className="flex items-center">
              <Calendar className={`mr-3 ${darkMode ? "text-purple-400" : "text-purple-500"}`} size={24} />
              <div>
                <h3 className="text-lg font-medium">Total Tasks</h3>
                <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {tasks.length} tasks in your list
                </p>
              </div>
            </div>
          </div>
        </div>

              
            
        <TaskForm addTask={addTask} darkMode={darkMode} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default App;