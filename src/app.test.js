import React from 'react';
import { shallow } from 'enzyme';

import { App } from './app';

describe('app component', () => {
    it('should render component', () => {
       const wrapper = shallow(<App/>);

       expect(wrapper).toMatchSnapshot();
    });
});