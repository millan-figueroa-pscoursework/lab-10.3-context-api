import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { FilterContext } from "../context/FilterContext";

export default function TodoList() {
  const { todo } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);

  // filters todo list based on current filter value
  const filteredTodos = todo.filter((todo) => {
    //if filter = active, returns only incomplete tasks
    if (filter === "active") return !todo.completed;
    // otherwise returns all tasks
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div>
      <h2>Todos List</h2>
      <div>Filter: {filter}</div>
      {/* uses map to render filtered list */}
      {filteredTodos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </div>
  );
}
