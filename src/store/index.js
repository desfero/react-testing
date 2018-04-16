import {createStore} from 'redux';
import reducers from './reducers';

export default (initialState = {}) => {
    let middleware;

    if (process.env.NODE_ENV !== 'production') {
        const devToolsExtension = window.devToolsExtension;
        if (typeof devToolsExtension === 'function') {
            middleware = devToolsExtension();
        }
    }

    const store = createStore(reducers, initialState, middleware);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(require('./reducers').default);
        });
    }

    return store;
};