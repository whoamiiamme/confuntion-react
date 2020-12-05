import constants from "../shared/constansts";
export default (state = {}, action) => {
	const { SET_ARTISTS, ADD_ARTISTS } = constants;
	switch (action.type) {
		case SET_ARTISTS:
			return action.payload;
		case ADD_ARTISTS:
			return {
				...state,
				next: action.payload.next,
				items: [...state.items, ...action.payload.items],
			};
		default:
			return state;
	}
};
