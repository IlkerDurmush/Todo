import { useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Add a new task"
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
