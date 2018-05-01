import React from 'react';
import { shallow } from 'enzyme';
import { TodoFormBase } from './todo-form';

describe('todo-form', () => {
    it('should correctly render component', () => {
        const handleSubmit = () => {};
        const wrapper = shallow(<TodoFormBase handleSubmit={handleSubmit}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should submit handle input change', () => {
        jest.mock('./todo-form');
        const handleSubmit = () => {};
        const wrapper = shallow(<TodoFormBase handleSubmit={handleSubmit}/>);

        const input = wrapper.find('input');
        const value = 'new todo';
        input.value = value;
        input.simulate('change');

        expect(TodoFormBase.handleChange).toHaveBeenCalled();

        jest.unmock('./todo-form');
    });

    // it('should submit the form', () => {
    //     const handleSubmit = jest.fn();
    //     const wrapper = shallow(<TodoFormBase handleSubmit={handleSubmit}/>);
    // });
});