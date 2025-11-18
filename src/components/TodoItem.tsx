import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import type { TodoType } from "../types";

interface TodoItemProps {
  todo: TodoType;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const todoCtx = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  if (!todoCtx) return null;

  const { toggleTodo, deleteTodo, editTodo } = todoCtx;

  const handleSave = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    editTodo(todo.id, trimmed);
    setIsEditing(false);
  };

  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {isEditing ? (
          <input value={draft} onChange={(e) => setDraft(e.target.value)} />
        ) : (
          <span>{todo.text}</span>
        )}
      </div>

      <div>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button
              onClick={() => {
                setDraft(todo.text);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
}
