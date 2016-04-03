import React from 'react';
import TodoList from './TodoList';

const Todos = () => {
    return (
        <div className="todos">
            <h1>Redux ToDos</h1>
            <TodoList />
        </div>
    );
};


export default Todos;