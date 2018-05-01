import React from 'react';
import { shallow } from 'enzyme';

import { App } from './app';

/* Not sure how am I supposed to test it */
xdescribe('index', () => {
    it('should render component', async () => {
        const container = document.createElement('div');
        container.id = 'root';
        document.body.appendChild(container);
        const {render} = await import('./index');

        const wrapper = shallow(render(App));

        expect(wrapper).toMatchSnapshot();
    });
});