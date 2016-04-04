import React from 'react';
import Todo from './Todo';


const TodoList = ({list, removeTodo }) => {
		list = list.map( 
			(todo, id) => <Todo
											key={id} 
											id={todo.id} 
											text={todo.text}
											removeTodo={removeTodo}
										/>
		);
    return (
        <ul>
            { list }
        </ul>
    );
};

export default TodoList;