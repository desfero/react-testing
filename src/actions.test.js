import React from 'react';
import { changeFilter, changeTodoState, createTodo, removeTodo } from './actions';
import { CHANGE_FILTER, CHANGE_TODO_STATE, CREATE_TODO, REMOVE_TODO } from './action-types';

describe('actions', () => {
    it('should create "createTodo" action', () => {
        const payload = {
            id: 1,
            title: 'New todo'
        };
        const action = createTodo(payload);
        const expectedAction = {
            type: CREATE_TODO,
            payload
        };

        expect(action).toEqual(expectedAction);
    });

    it('should create "removeTodo" action', () => {
        const payload = 1;
        const action = removeTodo(payload);
        const expectedAction = {
            type: REMOVE_TODO,
            payload
        };

        expect(action).toEqual(expectedAction);
    });

    it('should create "changeTodoState" action', () => {
        const payload = 1;
        const action = changeTodoState(payload);
        const expectedAction = {
            type: CHANGE_TODO_STATE,
            payload
        };

        expect(action).toEqual(expectedAction);
    });

    it('should create "changeFilter" action', () => {
        const payload = 'ALL';
        const action = changeFilter(payload);
        const expectedAction = {
            type: CHANGE_FILTER,
            payload
        };

        expect(action).toEqual(expectedAction);
    });
});