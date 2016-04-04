const todos = (state = {}, action) => {
	switch(action.type){
		case 'ADD_TODO':
			return Object.assign({}, state, {
				list: [
					...state.list,
					{ 
						id: state.list.length + 1,
						text: action.text,
						completed: false
					}
				]
			});
		case 'REMOVE_TODO':
			return Object.assign({}, state, {
				list: state.list.filter( todo => todo.id !== action.id )
			});
		default: 
			return state;
	}
}

export default todos;