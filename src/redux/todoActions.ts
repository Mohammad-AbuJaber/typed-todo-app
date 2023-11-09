import {Dispatch} from 'react';

export const addTodo = (dispatch: Dispatch<any>, text: string) => {
    if (text.trim() !== '') {
        dispatch({
            type: 'ADD_TODO',
            payload: {id: Date.now(), text: text, completed: false},
        });
    }
};

export const toggleTodo = (dispatch: Dispatch<any>, id: number) => {
    dispatch({type: 'TOGGLE_TODO', payload: id});
};

export const deleteTodo = (dispatch: Dispatch<any>, id: number) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this todo?');
    if (shouldDelete) {
        dispatch({type: 'CONFIRM_DELETE_TODO', payload: id});
    }
};

export const setNewTodoText = (dispatch: Dispatch<any>, text: string) => {
    dispatch({type: 'SET_NEW_TODO_TEXT', payload: text});
};
