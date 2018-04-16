import React from 'react';
import {Route} from 'react-router-dom';
import {TodoPage} from './components/todo-page';

export const App = () => (
    <main>
        <Route exact path="/" component={TodoPage}/>
    </main>
);