import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <div className="p-40 min-h-screen bg-neutral-750 text-neutral-10 text-center">
      <TodoList />
      <TodoInput />
    </div>
  );
}

export default App;
