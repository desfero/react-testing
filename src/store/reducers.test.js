import React from 'react';
import {combineReducers} from 'redux';
import {routerReducer} from "react-router-redux";

import {tasksReducer} from "../reducer";

import reducer from './reducers';
jest.mock('redux');

describe('reducers', () => {
    it('should call combine reducers', () => {
        expect(combineReducers).toHaveBeenCalledWith({
            routing: routerReducer,
            todos: tasksReducer
        });
    });
});