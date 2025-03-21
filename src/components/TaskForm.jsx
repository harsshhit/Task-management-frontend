import { useState } from "react";
import { PlusCircle, RefreshCw } from "lucide-react";

function TaskForm({ addTask, darkMode }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    setIsSubmitting(true);
    addTask({ title: taskTitle, status: "Pending" });

    setTimeout(() => {
      setTaskTitle("");
      setIsSubmitting(false);
    }, 300);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div
        className={`flex items-center p-1 rounded-lg shadow-lg transition-all duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className={`w-full p-4 text-lg rounded-l-lg focus:outline-none transition-colors duration-300 ${
            darkMode
              ? "bg-gray-800 text-white placeholder-gray-500"
              : "bg-white text-gray-800 placeholder-gray-400"
          }`}
          placeholder="What needs to be done?"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`flex items-center justify-center p-4 rounded-r-lg transition-all duration-300 ${
            isSubmitting
              ? "bg-gray-400"
              : "bg-gradient-to-r from-blue-500 to-indigo-600"
          } text-white hover:shadow-lg transform hover:scale-105`}
        >
          {isSubmitting ? (
            <RefreshCw className="animate-spin" size={24} />
          ) : (
            <div className="flex items-center">
              <PlusCircle size={24} />
              <span className="ml-2 font-medium">Add Task</span>
            </div>
          )}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
