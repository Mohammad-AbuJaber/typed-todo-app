import React from 'react';
import {Todo} from '../redux/types';
import '../styles/TodoItem.css';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onToggle, onDelete}) => {
    return (
        <div className="todo-item">
            <input
                className="toggle-checkbox"
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span className={todo.completed ? 'completed-text' : 'todo-text'}>
        {todo.text}
      </span>
            <button className="delete-button" onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
