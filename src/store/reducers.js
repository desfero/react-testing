import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import {tasksReducer} from '../reducer';


export default combineReducers({
    routing: routerReducer,
    todos: tasksReducer
});