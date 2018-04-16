import {CREATE_TODO, REMOVE_TODO,} from './action-types';

export function createTodo(task) {
    return {
        type: CREATE_TODO,
        payload: task
    };
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    };
}