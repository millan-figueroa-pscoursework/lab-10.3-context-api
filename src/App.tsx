import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";

function App() {
  return (
    <div className="p-40 min-h-screen bg-neutral-750 text-neutral-10 text-center">
      <TodoList />
      <TodoInput />
      <FilterButtons />
    </div>
  );
}

export default App;
