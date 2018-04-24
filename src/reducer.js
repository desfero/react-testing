import uniqid from 'uniqid';
import {List, Record} from 'immutable';
import {CREATE_TODO, REMOVE_TODO, COMPLETE_TODO} from './action-types';


export const TasksState = new Record({
    filter: '',
    list: new List([{id: uniqid(), title: 'Complete my homework', done: false}]),
});


export function tasksReducer(state = new TasksState(), {payload, type}) {
    switch (type) {
        case CREATE_TODO:
            return state.merge({
                list: state.list.unshift({id: uniqid(), title: payload, done: false})
            });

        case REMOVE_TODO:
            return state.merge({
                list: state.list.filter(task => task.id !== payload)
            });

      case COMPLETE_TODO:
        return state.merge({
          list: state.list.map((task) => {
            if (task.id === payload.id) {
              return {...task, done: !!payload.state};
            } else {
              return task;
            }
          })
        });

        default:
            return state;
    }
}
