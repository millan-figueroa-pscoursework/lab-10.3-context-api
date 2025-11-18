import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { FilterContext } from "../context/FilterContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todoCtx = useContext(TodoContext);
  const filterCtx = useContext(FilterContext);

  if (!todoCtx || !filterCtx) return null;

  const { todo } = todoCtx;
  const { filter } = filterCtx;

  // filters todo list based on current filter value
  const filteredTodos = todo.filter((todo) => {
    //if filter = active, returns only incomplete tasks
    if (filter === "active") return !todo.completed;
    // otherwise returns all tasks
    if (filter === "completed") return todo.completed;
    return true;
  });

  if (!filteredTodos.length) {
    return (
      <p className="mt-6 text-center text-sm italic text-neutral-400">
        No todos yet! Add one above.
      </p>
    );
  }

  return (
    <div className="flex flex-col text-2xl font-bold">
      <h2>Todo App (Context API)</h2>
      <div>Filter: {filter}</div>
      {/* uses map to render filtered list */}
      <ul className="mt-6 space-y-2">
        {filteredTodos.map((t) => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </ul>
    </div>
  );
}
