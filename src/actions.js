import { CHANGE_FILTER, CHANGE_TODO_STATE, CREATE_TODO, REMOVE_TODO, } from './action-types';

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

export function changeTodoState(id) {
    return {
        type: CHANGE_TODO_STATE,
        payload: id
    };
}

export function changeFilter(filter) {
    return {
        type: CHANGE_FILTER,
        payload: filter
    };
}