import React, { Component } from 'react';

class Todo extends Component{
	handleClick(){
		this.props.toggleTodo(this.props.id);
	}
	render(){
		return (
			<li
				onClick={() => this.handleClick() }
				key = {this.props.id}
				style = {{
					textDecoration:
						this.props.completed ? "line-through" : "none"
				}}
			>
				{this.props.text}
			</li>
		);
	}
}

export default Todo;