import constants from "../shared/constansts";

export default (state = {}, action) => {
	const { SET_PLAYLIST, ADD_PLAYLIST } = constants;
	switch (action.type) {
		case SET_PLAYLIST:
			return action.payload;
		case ADD_PLAYLIST:
			return {
				...state,
				next: action.payload.next,
				items: [...state.items, ...action.payload.items],
			};
		default:
			return state;
	}
};
