import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col text-center pt-10">
      <h1 className="text-2xl font-bold">Todo App (Context API)</h1>
      <div className="mx-auto max-w-2xl px-4 py-2">
        <TodoInput />
        <FilterButtons />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
