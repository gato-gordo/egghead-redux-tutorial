import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './components/Todos'
import todos from './reducers/Todos';
import { createStore } from 'redux';

const state = createStore(todos, {
	list: [],
	filter: 'SHOW_ALL'
});

const list = () => {
	return state.getState().list;
}

const filter = () => {
	return state.getState().filter;
}

let idNum = 0;

const addTodo = (text) => {
	state.dispatch({
		type: 'ADD_TODO',
		text: text,
		id: ++idNum
	});
}


const removeTodo = (id) => {
	state.dispatch({
		type: 'REMOVE_TODO',
		id: id
	});
}

const toggleTodo = (id) => {
	state.dispatch({
		type: 'TOGGLE_TODO',
		id: id
	});
}

const render = () => {
    ReactDOM.render(
        <Todos 
        	list=       { list()     }
        	filter=     { filter()   }
        	addTodo=    { addTodo 	 }
        	removeTodo= { removeTodo }
			toggleTodo= { toggleTodo }
        />,
        document.getElementById('content')
    );
};

state.subscribe(render);
render();
