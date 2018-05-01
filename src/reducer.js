import uniqid from 'uniqid';
import { List, Record } from 'immutable';
import { CHANGE_FILTER, CHANGE_TODO_STATE, CREATE_TODO, REMOVE_TODO } from './action-types';

export const TasksState = new Record({
    filter: 'ALL',
    list: new List([
        {id: uniqid(), title: 'Complete my homework', completed: true},
        {id: uniqid(), title: 'Brush teeth', completed: false}
    ]),
});

export function tasksReducer(state = new TasksState(), {payload, type}) {
    switch (type) {
        case CREATE_TODO:
            return state.merge({
                list: state.list.unshift({id: uniqid(), title: payload, completed: false})
            });

        case REMOVE_TODO:
            return state.merge({
                list: state.list.filter(task => task.id !== payload)
            });

        case CHANGE_TODO_STATE:
            return state.merge({
                list: state.list.map(task => task.id === payload ? {...task, completed: !task.completed} : task)
            });

        case CHANGE_FILTER:
            return state.merge({
                filter: payload
            });

        default:
            return state;
    }
}