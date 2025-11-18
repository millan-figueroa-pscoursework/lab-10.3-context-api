# Project Requirements

Build a Todo application with the following features, primarily using the Context API for state management.

## 1. Core Todo Management (TodoContext)

### State: An array of todo items. Each todo item should have at least:

- [x] id: A unique identifier (string or number).
- [x] text: The content of the todo (string).
- [x] completed: A boolean indicating if the todo is completed.

### Actions (exposed via context):

- [] addTodo(text: string): Adds a new todo item to the list.x
- [] toggleTodo(id: string | number): Toggles the completed status of a todo item.
- [] deleteTodo(id: string | number): Removes a todo item from the list.
- [] editTodo(id: string | number, newText: string): Edits the text of an existing todo item.
- [] clearCompleted(): Removes all completed todos.

### Components:

- [x] TodoInput: An input field to add new todos.
- [x] TodoList: Displays the list of todo items.
- [x] TodoItem: Represents a single todo item, allowing interaction (toggle, delete, edit).

## 2. Visibility Filters (FilterContext)

### State:

- [x] The current visibility filter. Possible values: ‘all’, ‘active’, ‘completed’.

### Actions (exposed via context):

- [x] setFilter(filter: string): Sets the current filter.

### Functionality:

- [] The TodoList should display todos based on the currently active filter from FilterContext.
- [] FilterButtons: A component that displays buttons to change the current filter.

## 3. Theme Switching (ThemeContext)

### State: The current theme. Possible values: ‘light’, ‘dark’.

### Actions (exposed via context):

- [] toggleTheme(): Switches between ‘light’ and ‘dark’ themes.

### Functionality:

- [] The application should visually change based on the selected theme (e.g., background colors, text colors). Apply theme changes to the main app container and ideally a few key components.
- [] ThemeToggleButton: A button to toggle the theme.

## 4. Persistence Layer

### Functionality:

- [] The state of the todos (from TodoContext) and the current theme (from ThemeContext) should be persisted to localStorage.
- [] When the application loads, it should attempt to rehydrate these states from localStorage.
- [] Updates to todos or theme should automatically update localStorage.
