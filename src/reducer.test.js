import {List} from 'immutable';
import uniqid from 'uniqid';
import {CREATE_TODO, REMOVE_TODO, COMPLETE_TODO} from './action-types';

jest.mock('uniqid');

describe('reducer', () => {
    it('should return default state', () => {
        uniqid.mockReturnValueOnce(1);

        const {tasksReducer} = require('./reducer');


        const state = tasksReducer(undefined, {});


        expect(state.toJS()).toEqual({
            filter: '',
            list: [{
                id: 1,
                done: false,
                title: 'Complete my homework'
            }]
        });
    });

    it('should return correct state for CREATE_TODO', () => {
        uniqid.mockReturnValueOnce(2);

        const {tasksReducer, TasksState} = require('./reducer');

        const todo = {
            id: 1,
            title: 'Complete my homework'
        };
        const state = new TasksState({
            list: new List([todo])
        });

        const newState = tasksReducer(state, {
            type: CREATE_TODO,
            payload: 'New todo'
        });


        expect(newState.get('list').toJS()).toEqual([
            {
                title: 'New todo',
                done: false,
                id: 2
            },
            todo,

        ]);


    });

    it('should return correct state for REMOVE_TODO', () => {
        const {tasksReducer, TasksState} = require('./reducer');

        const todo = {
            id: 1,
            title: 'Complete my homework'
        };
        const todo2 = {
            id: 2,
            title: 'Complete something'
        };
        const state = new TasksState({
            list: new List([todo, todo2])
        });

        const newState = tasksReducer(state, {
            type: REMOVE_TODO,
            payload: 1
        });


        expect(newState.get('list').toJS()).toEqual([todo2]);
    });

  it('should return correct state for COMPLETE_TODO', () => {
    const {tasksReducer, TasksState} = require('./reducer');

    const todo = {
      id: 1,
      title: 'Complete my homework',
      done: false
    };
    const todo2 = {
      id: 2,
      title: 'Complete something',
      done: true
    };
    const state = new TasksState({
      list: new List([todo, todo2])
    });

    const newState = tasksReducer(state, {
      type: COMPLETE_TODO,
      payload: { id:1, 'state': true }
    });

    expect(newState.get('list').toJS()).toEqual([{...todo, done: true}, todo2]);

    const newState2 = tasksReducer(state, {
      type: COMPLETE_TODO,
      payload: { id:2, 'state': false }
    });

    expect(newState2.get('list').toJS()).toEqual([todo, {...todo2, done: false}]);
  });
});
