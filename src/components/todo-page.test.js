import React from 'react';
import { List } from 'immutable';
import {shallow, mount} from 'enzyme';
import {TodoPage, TodoPageBase} from './todo-page';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

describe('TodoPage', () => {

  const todo = {id: 1, title: 'Something', done: false};
  const todo2 = {id: 2, title: 'Something new', done: true};

  const removeTodo = jest.fn();
  const completeTodo = jest.fn();

  const store = configureStore()({todos: { list:  new List([todo, todo2])}});

  it('should render the component', () => {
    const f = jest.fn();
    const wrapper = shallow(<TodoPageBase createTodo={f} removeTodo={f} completeTodo={f} todos={new List()} />);

    expect(wrapper).toMatchSnapshot()
  });

  it('should change state after click on Done button', () => {
    const wrapper = mount(<Provider store={store}><TodoPage /></Provider>);

    expect(wrapper.find('li').length).toEqual(2);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('li').length).toEqual(1);
  })

  it('should change state after click on Todo button', () => {
    const wrapper = mount(<Provider store={store}><TodoPage /></Provider>);

    expect(wrapper.find('li').length).toEqual(2);
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.find('li').length).toEqual(1);
  })

  it('should change state after click on All button', () => {
    const wrapper = mount(<Provider store={store}><TodoPage /></Provider>);

    expect(wrapper.find('li').length).toEqual(2);
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.find('li').length).toEqual(2);
  })
});
