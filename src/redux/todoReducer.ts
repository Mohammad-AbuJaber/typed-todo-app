import {State, Action} from './types';

const todoReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
                newTodoText: '',
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
                ),
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todoToDelete: action.payload,
            };
        case 'CONFIRM_DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
                todoToDelete: null,
            };
        case 'SET_NEW_TODO_TEXT':
            return {
                ...state,
                newTodoText: action.payload,
            };
        default:
            return state;
    }
};

export default todoReducer;
