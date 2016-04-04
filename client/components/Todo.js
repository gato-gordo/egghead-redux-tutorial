import React, { Component } from 'react';

class Todo extends Component{
	handleClick(){
		console.log('click');
		this.props.removeTodo(this.props.id);
	}
	render(){
		return (
			<li
				onClick={() => this.handleClick() }
				key={this.props.id}
			>
				{this.props.text}
			</li>
		);
	}
}

export default Todo;