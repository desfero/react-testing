import {CREATE_TODO, REMOVE_TODO, COMPLETE_TODO} from './action-types';

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

export function completeTodo(id, state) {
  return {
    type: COMPLETE_TODO,
    payload: {id, state}
  };
}
