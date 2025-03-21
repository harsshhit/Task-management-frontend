import { Moon, Sun } from "lucide-react";

function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
        darkMode ? "bg-gray-700 text-yellow-300" : "bg-blue-100 text-indigo-600"
      }`}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default DarkModeToggle;
