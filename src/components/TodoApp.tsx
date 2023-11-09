import React, {useReducer} from 'react';
import TodoItem from './TodoItem';
import todoReducer from '../redux/todoReducer';
import {addTodo, toggleTodo, deleteTodo, setNewTodoText} from '../redux/todoActions';
import '../styles/TodoApp.css';

const TodoApp: React.FC = () => {
    const [{todos, newTodoText}, dispatch] = useReducer(todoReducer, {
        todos: [],
        newTodoText: '',
        todoToDelete: null,
    });

    return (
        <div className="todo-app">
            <h1>Todo App</h1>
            <div className="add-todo-section">
                <input
                    className="todo-input"
                    type="text"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(dispatch, e.target.value)}
                />
                <button className="add-todo-button" onClick={() => addTodo(dispatch, newTodoText)}>
                    Add Todo
                </button>
            </div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={() => toggleTodo(dispatch, todo.id)}
                          onDelete={() => deleteTodo(dispatch, todo.id)}/>
            ))}
        </div>
    );
};

export default TodoApp;
