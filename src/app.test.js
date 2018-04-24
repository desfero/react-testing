import React from 'react';
import {shallow} from 'enzyme';
import {App} from './app';

describe('App', () => {
  it('should render the compoent', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
