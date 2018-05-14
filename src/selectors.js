export function getTodos(state) {
    switch (state.todos.filter) {
        case 'COMPLETED':
            return state.todos.list.filter(todo => todo.completed);

        case 'UNCOMPLETED':
            return state.todos.list.filter(todo => !todo.completed);

        case 'ALL':
        default:
            return state.todos.list;
    }
}
