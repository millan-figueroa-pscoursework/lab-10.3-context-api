import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-2xl px-4 py-8">
        {/* header + theme button already done */}
        <TodoInput />
        <FilterButtons />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
