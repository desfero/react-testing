import React from 'react';
import { List } from 'immutable';
import {shallow} from 'enzyme';
import {TodoList} from './todo-list';

describe('TodoList', () => {

  const todo = {id: 1, title: 'Something', done: false};

  const removeTodo = jest.fn();
  const completeTodo = jest.fn();

  it('should render the component', () => {
    const wrapper = shallow(<TodoList todos={new List([todo])} removeTodo={removeTodo} completeTodo={completeTodo} />);

    expect(wrapper).toMatchSnapshot()
  });
});
