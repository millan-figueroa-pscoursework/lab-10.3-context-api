export type TodoType = {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoProvidersProps {
    children: React.ReactNode;
}

export interface TodoContextType {
    todo: TodoType[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
    clearCompleted: () => void;
}

export interface FilterProviderProps {
    children: React.ReactNode;
}

export type FilterType = "all" | "active" | "completed";

export interface FilterContextValue {
    filter: FilterType;
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}
