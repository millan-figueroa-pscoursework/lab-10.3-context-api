import { createContext, useState } from "react";
import type {
  FilterProviderProps,
  FilterType,
  FilterContextValue,
} from "../types";

// gives createContext the correct type to fix type error
export const FilterContext = createContext<FilterContextValue>({
  filter: "all",
  setFilter: () => {},
});

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
