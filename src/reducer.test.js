import { List } from 'immutable';
import uniqid from 'uniqid';
import { CHANGE_FILTER, CHANGE_TODO_STATE, CREATE_TODO, REMOVE_TODO } from './action-types';

jest.mock('uniqid');
uniqid.mockReturnValueOnce(1).mockReturnValueOnce(2).mockReturnValueOnce(3);

describe('reducer', () => {
    it('should return default state', async () => {

        const {tasksReducer, TasksState} = await import('./reducer');

        const state = tasksReducer(undefined, {});
        const expectedState = new TasksState();

        expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it('should return correct state for CREATE_TODO', async () => {
        const {tasksReducer, TasksState} = await import('./reducer');

        const state = new TasksState();

        const newState = tasksReducer(state, {
            type: CREATE_TODO,
            payload: 'New todo'
        });

        expect(newState.get('list').toJS()).toEqual([
            {
                id: 3,
                title: 'New todo',
                completed: false
            },
            ...state.get('list'),
        ]);
    });

    it('should return correct state for REMOVE_TODO', async () => {
        const {tasksReducer, TasksState} = await import('./reducer');

        const todo = {
            id: 1,
            title: 'Complete my homework',
            completed: false
        };
        const todo2 = {
            id: 2,
            title: 'Complete something',
            completed: false
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

    it('should return corrent state for CHANGE_TODO_STATE', async () => {
        const {tasksReducer, TasksState} = await import('./reducer');

        const todos = [
            {
                id: 1,
                title: 'todo 1',
                completed: true
            },
            {
                id: 2,
                title: 'todo 2',
                completed: false
            },
            {
                id: 3,
                title: 'todo 3',
                completed: false
            }
        ];

        const state = new TasksState({
              list: new List(todos)
          });

        let newState = tasksReducer(state, {
            type: CHANGE_TODO_STATE,
            payload: 1
        });
        expect(newState.get('list').toJS()).toEqual(todos.map(t => t.id === 1 ? {
            ...t,
            completed: false
        } : t));

        newState = tasksReducer(state, {
            type: CHANGE_TODO_STATE,
            payload: 2
        });
        expect(newState.get('list').toJS()).toEqual(todos.map(t => t.id === 2 ? {
            ...t,
            completed: true
        } : t));
    });

    it('should return corrent state for CHANGE_FILTER', async () => {
        const {tasksReducer, TasksState} = await import('./reducer');

        const state = new TasksState();
        const payload = 'COMPLETED';

        const newState = tasksReducer(state, {
            type: CHANGE_FILTER,
            payload
        });

        expect(newState.get('filter')).toEqual(payload);
    });
});