import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {render as domRender} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './store';
import {App} from './app';

const store = configureStore();
const rootElement = document.getElementById('root');

function render(Component) {
    domRender(
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Component/>
                </div>
            </BrowserRouter>
        </Provider>,
      rootElement
    );
}


if (module.hot) {
    module.hot.accept('./app', () => {
        render(require('./app').default);
    });
}

render(App);