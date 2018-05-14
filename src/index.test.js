import React from 'react';

import './index';
import {render} from 'react-dom';
jest.mock('react-dom');

describe('index', () => {
    it('should render component', async () => {
        expect(render.mock.calls[0][0]).toMatchSnapshot();
    });
});