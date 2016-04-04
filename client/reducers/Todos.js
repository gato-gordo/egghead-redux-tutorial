const todos = (state = {}, action) => {
	switch(action.type){
		case 'ADD_TODO':
			return Object.assign({}, state, {
				list: [
					...state.list,
					{ 
						id: action.id,
						text: action.text,
						completed: false
					}
				]
			});
		case 'TOGGLE_TODO':
			return Object.assign({}, {
				list: state.list.map(
					(todo) => todo.id !== action.id ? todo :
						Object.assign({}, todo, {
							completed: !todo.completed
						})
				)
			});
		case 'REMOVE_TODO':
			return Object.assign({}, {
				list: state.list.filter( todo => todo.id !== action.id )
			});
		default: 
			return state;
	}
}

const todo = (state={}, action) => {

}

export default todos;