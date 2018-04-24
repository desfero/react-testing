import * as actions from './actions'
import * as types from './action-types'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.CREATE_TODO,
      payload: text
    }
    expect(actions.createTodo(text)).toEqual(expectedAction)
  });

  it('should create an action to remove a todo', () => {
    const idx = 2;
    const expectedAction = {
      type: types.REMOVE_TODO,
      payload: idx
    }
    expect(actions.removeTodo(idx)).toEqual(expectedAction)
  });

  it('should create an action to complete a todo', () => {
    const idx = 1;
    const state = true;
    const expectedAction = {
      type: types.COMPLETE_TODO,
      payload: {
        id: idx,
        state: state
      }
    }
    expect(actions.completeTodo(idx, state)).toEqual(expectedAction)
  });
});
