import React from 'react';

import { getTodos } from './selectors';

describe('selectors', () => {
    const completedTodo = {
        id: 1,
        title: 'Completed todo',
        completed: true
    };

    const uncompletedTodo = {
        id: 1,
        title: 'Completed todo',
        completed: false
    };

   it('should select all todos', () => {
       const state = {
           filter: 'ALL',
           list: [completedTodo, uncompletedTodo]
       };

       const selectedTodos = getTodos({todos: state});

       expect(selectedTodos).toEqual([completedTodo, uncompletedTodo])
   });

   it('should select completed todos', () => {
       const state = {
           filter: 'COMPLETED',
           list: [completedTodo, uncompletedTodo]
       };

       const selectedTodos = getTodos({todos: state});

       expect(selectedTodos).toEqual([completedTodo])
   });

   it('should select uncompleted todos', () => {
       const state = {
           filter: 'UNCOMPLETED',
           list: [completedTodo, uncompletedTodo]
       };

       const selectedTodos = getTodos({todos: state});

       expect(selectedTodos).toEqual([uncompletedTodo])
   });
});