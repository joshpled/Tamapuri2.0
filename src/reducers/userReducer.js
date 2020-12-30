export default function userReducer(
	state = { loggedInStatus: 'NOT_LOGGED_IN', user: {}, loading: false },
	action
) {
	// debugger
	switch (action.type) {
		case 'SET_USER':
			return {
				loggedInStatus: 'LOGGED_IN',
				user: action.payload,
			};

		case 'CLEAR_USER':
			return { ...state, loggedInStatus: 'NOT_LOGGED_IN', user: {} };

		default:
			return state;
	}
}
