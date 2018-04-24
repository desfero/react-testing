import React from 'react';
import {shallow} from 'enzyme';
import {TodoItem} from './todo-item';

describe('TodoItem', () => {

  const todo = {id: 1, title: 'Something', done: false};

  it('should render layout', () => {
    const wrapper = shallow(<TodoItem item={todo}/>);

    expect(wrapper).toMatchSnapshot()
  });

  it('should invoke removeTodo after click on button', () => {
    const removeTodo = jest.fn();

    const wrapper = shallow(<TodoItem item={todo} removeTodo={removeTodo}/>);

    wrapper.find('button').simulate('click');

    expect(removeTodo).toHaveBeenCalledWith(1)
  })

  it('should invoke completeTodo after click on checkbox', () => {
    const completeTodo = jest.fn();
    const wrapper = shallow(<TodoItem item={todo} completeTodo={completeTodo}/>);

    wrapper.find('input').simulate('change');
    expect(completeTodo).toHaveBeenCalledWith(1, true);
  })
});
