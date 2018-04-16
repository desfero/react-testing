import uniqid from 'uniqid';
import {List, Record} from 'immutable';
import {CREATE_TODO, REMOVE_TODO,} from './action-types';


export const TasksState = new Record({
    filter: '',
    list: new List([{id: uniqid(), title: 'Complete my homework'}]),
});


export function tasksReducer(state = new TasksState(), {payload, type}) {
    switch (type) {
        case CREATE_TODO:
            return state.merge({
                list: state.list.unshift({id: uniqid(), title: payload})
            });

        case REMOVE_TODO:
            return state.merge({
                list: state.list.filter(task => task.id !== payload)
            });

        default:
            return state;
    }
}