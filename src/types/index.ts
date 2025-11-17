export type TodoType = {
    id: number;
    text: string;
    completed: boolean;
}

export interface ProvidersType {
    children: React.ReactNode;
}

export interface TodoContextType {
    todos: TodoType[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
    clearCompleted: () => void;
}