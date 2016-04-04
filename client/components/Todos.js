import React, { Component } from 'react';
import TodoList from './TodoList';

class Todos extends Component {
		constructor(){
			super();
			this.state = {
				newTodo: ''
			}; 
		}
		handleChange(e){
			this.setState({
				newTodo: e.target.value
			});
		}
		handleClick(){
			this.props.addTodo(this.state.newTodo);
			this.setState({
				newTodo: ''
			})
		}
		render(){
	    return (
	        <div className="todos">
	            <h1>Redux ToDos</h1>
	            <TodoList 
	            	removeTodo={this.props.removeTodo}
	            	list={this.props.list} 
	            />
	            <input 
	            	type="text" 
	            	onChange={ (e) => this.handleChange(e) } 
	            	value={ this.state.newTodo}
	            />
	            <button onClick={() => { this.handleClick() } }>
	            	Add Todo
	            </button>
	        </div>
	    );
  	}
};


export default Todos;