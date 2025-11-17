import { createContext, useState, useEffect } from "react";
import type { Todo, TodoContextType, TodoProvidersProps } from "../types";

const data: Todo[] = [
  { id: 1, text: "Buy groceries", completed: false },
  { id: 2, text: "Finish homework", completed: true },
  { id: 3, text: "Walk the dog", completed: false },
  { id: 4, text: "Make dinner", completed: false },
  { id: 5, text: "Call mom", completed: true },
  { id: 6, text: "Clean rm", completed: false },
];

export const TodosContext = createContext<TodoContextType | null>(null);

export function TodoProvider({ children }: TodoProvidersProps) {
  const [todo, setTodo] = useState<Todo[]>(data);

  // store todo items when array changes
  useEffect(() => {}, []);

  // todo actions
  const addTodo = () => {};
  const deleteTodo = () => {};
  const toggleTodo = () => {};
  const editTodo = () => {};
  const clearCompleted = () => {};

  return (
    <TodosContext.Provider
      value={{
        todo,
        addTodo,
        deleteTodo,
        toggleTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
