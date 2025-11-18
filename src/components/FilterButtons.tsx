import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export default function FilterButtons() {
  const filterCtx = useContext(FilterContext);

  if (!filterCtx) return null;

  const { filter, setFilter } = filterCtx;

  const base =
    "rounded-md px-4 py-2 text-sm border border-neutral-700 transition-colors";
  const active = "bg-blue-600 text-white";
  const inactive = "bg-neutral-900 text-neutral-100";

  return (
    <div className="mt-4 flex gap-2">
      <button
        className={`${base} ${filter === "all" ? active : inactive}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`${base} ${filter === "active" ? active : inactive}`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`${base} ${filter === "completed" ? active : inactive}`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}
