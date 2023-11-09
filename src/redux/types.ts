export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface State {
    todos: Todo[];
    newTodoText: string;
    todoToDelete: number | null;
}

export type Action =
    | { type: 'ADD_TODO'; payload: Todo }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number }
    | { type: 'CONFIRM_DELETE_TODO'; payload: number }
    | { type: 'SET_NEW_TODO_TEXT'; payload: string };
