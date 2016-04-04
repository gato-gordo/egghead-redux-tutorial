import React from 'react';
import Todo from './Todo';


const TodoList = ({list, removeTodo, toggleTodo }) => {
		list = list.map(
				(todo, id) => <Todo
								key={id}
								id={todo.id}
								text={todo.text}
								completed={todo.completed}
								removeTodo={removeTodo}
								toggleTodo={toggleTodo}
									/>
		);
    return (
        <ul>
            { list }
        </ul>
    );
};

export default TodoList;