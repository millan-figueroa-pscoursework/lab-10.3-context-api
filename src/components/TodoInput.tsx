import { useContext, useState } from "react";
import type { FormEvent } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoInput() {
  const todoCtx = useContext(TodoContext);
  const [text, setText] = useState("");

  // in case context is typed as TodoContextType | null
  if (!todoCtx) return null;

  const { addTodo } = todoCtx;

  // using formevent here to type event parameter, provides autocomplete
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    addTodo(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded-md border border-neutral-700 bg-neutral-900/70 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Add Todo
      </button>
    </form>
  );
}
