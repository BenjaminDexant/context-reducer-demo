const reducer = (state, action) => {
	switch (action.type) {
		case "fetchUsers": {
			return { ...state, users: action.payload };
		}
		case "addUser": {
			const { first_name, city, postcode } = action.payload;
			const newId = state.users.length + 1
			return {
				...state, users: [...state.users, { id: newId, first_name, city, postcode }]
			};
		}

		default:
			return state;
	}
};

export default reducer;