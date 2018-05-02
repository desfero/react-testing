import React from 'react';

import configureStore from './index';
import reducers from "./reducers";

import {createStore} from 'redux';
jest.mock('redux');

describe('store index', () => {
   it('should call createStore with proper parameters', () => {
       const store = {};
       createStore.mockReturnValueOnce(store);
       const newStore = configureStore();

       expect(createStore).toHaveBeenCalledWith(reducers, {}, undefined);
       expect(newStore).toBe(store);
   })
});