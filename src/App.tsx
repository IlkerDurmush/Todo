import { useState, useEffect } from "react";
import type { Todo, Filter } from "./types";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = theme; // При всяка смяна, сменяме класа на body
  }, [theme]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const getFilterLabel = (filter: Filter): string => {
    switch (filter) {
      case "all":
        return "All tasks";
      case "active":
        return "Active tasks";
      case "completed":
        return "Completed tasks";
      default:
        return "";
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <div className="theme-toggle-container">
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
      <h1>To-Do List</h1>
      <TodoInput onAdd={addTodo} />{" "}
      <h2 style={{ marginTop: "1rem", color: "#555", textAlign: "center" }}>
        {getFilterLabel(filter)}
      </h2>
      <FilterButtons currentFilter={filter} onChangeFilter={setFilter} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
