const isEmpty = require('is-empty');
const initialState = {
	isAuthenticated: false,
	user: {},
	loading: true
};
export default function(state = initialState, action) {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			};
		case "SET_LOADING":
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
}
