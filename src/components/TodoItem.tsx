import type { Todo } from "../types";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
}

export default function TodoItem({ todo, onToggle }: Props) {
  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      onClick={() => onToggle(todo.id)}
    >
      <span>{todo.text}</span>
      <span
        className={`todo-action-label ${todo.completed ? "undo" : "complete"}`}
      >
        {todo.completed ? "↩ Undo" : "✔ Mark as complete"}
      </span>
    </li>
  );
}
