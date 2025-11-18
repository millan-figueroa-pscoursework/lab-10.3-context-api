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
    <li className="flex items-center justify-between rounded-md bg-neutral-900/70 px-3 py-2 text-sm">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-4 w-4 cursor-pointer"
        />
        {isEditing ? (
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            className="rounded-md bg-neutral-800 px-2 py-1 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span
            className={
              todo.completed ? "text-neutral-400 line-through" : "text-white"
            }
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="text-xs font-semibold text-green-400 hover:text-green-300"
            >
              Save
            </button>
            <button
              onClick={() => {
                setDraft(todo.text);
                setIsEditing(false);
              }}
              className="text-xs text-neutral-400 hover:text-neutral-200"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-xs text-neutral-300 hover:text-white"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-xs text-red-400 hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
