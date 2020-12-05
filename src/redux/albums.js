import constansts from "../shared/constansts";

export default (state = {}, action) => {
	const { SET_ALBUMS, ADD_ALBUMS } = constansts;
	switch (action.type) {
		case SET_ALBUMS:
			return action.payload;
		case ADD_ALBUMS:
			return {
				...state,
				next: action.payload.next,
				items: [...state.items, ...action.payload.items],
			};
		default:
			return state;
	}
};
