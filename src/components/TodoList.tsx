import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoList() {
  const { todo } = useContext(TodoContext);
  const filteredTodos = () => {
    console.log("Filtered tasks placeholder!");
  };

  return (
    <div>
      <h2>Todo List</h2>
    </div>
  );
}
