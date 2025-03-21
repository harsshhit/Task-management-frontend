import { useState } from "react";
import { Trash2, Edit2, Check, X } from "lucide-react";

function TaskList({ tasks, deleteTask, updateTask, darkMode }) {
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const startEditing = (task) => {
    setEditingId(task._id);
    setEditedTitle(task.title);
  };

  const saveEdit = (id) => {
    updateTask(id, { title: editedTitle });
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  if (tasks.length === 0) {
    return (
      <div
        className={`text-center py-16 rounded-lg transition-all duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md`}
      >
        <p className="text-2xl font-light text-gray-500">
          No tasks yet. Add one above!
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task._id}
          className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:translate-y-px ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="flex items-center p-4">
            {task.status === "Completed" && (
              <div className="w-1 h-full rounded-full bg-green-500 mr-3"></div>
            )}

            <button
              onClick={() =>
                updateTask(task._id, {
                  status: task.status === "Pending" ? "Completed" : "Pending",
                })
              }
              className={`flex-shrink-0 w-6 h-6 rounded-full mr-4 flex items-center justify-center transition-all duration-300 ${
                task.status === "Completed"
                  ? "bg-green-500 text-white"
                  : `border-2 ${
                      darkMode ? "border-gray-600" : "border-gray-300"
                    }`
              }`}
            >
              {task.status === "Completed" && <Check size={14} />}
            </button>

            {editingId === task._id ? (
              <div className="flex-grow flex">
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className={`w-full p-2 rounded focus:outline-none transition-colors duration-300 ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                  autoFocus
                />
              </div>
            ) : (
              <span
                className={`flex-grow px-2 ${
                  task.status === "Completed"
                    ? "line-through text-gray-500"
                    : darkMode
                    ? "text-white"
                    : "text-gray-800"
                } transition-all duration-300`}
              >
                {task.title}
              </span>
            )}

            <div className="flex space-x-2">
              {editingId === task._id ? (
                <>
                  <button
                    onClick={() => saveEdit(task._id)}
                    className="text-green-500 p-2 rounded-full hover:bg-green-100 transition-colors duration-300"
                  >
                    <Check size={18} />
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="text-red-500 p-2 rounded-full hover:bg-red-100 transition-colors duration-300"
                  >
                    <X size={18} />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => startEditing(task)}
                    className={`p-2 rounded-full transition-colors duration-300 ${
                      darkMode
                        ? "text-blue-400 hover:bg-gray-700"
                        : "text-blue-600 hover:bg-blue-100"
                    }`}
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => deleteTask(task._id)}
                    className={`p-2 rounded-full transition-colors duration-300 ${
                      darkMode
                        ? "text-red-400 hover:bg-gray-700"
                        : "text-red-600 hover:bg-red-100"
                    }`}
                  >
                    <Trash2 size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
