export type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoProvidersProps {
    children: React.ReactNode;
}

export interface TodoContextType {
    todo: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
    clearCompleted: () => void;
}

