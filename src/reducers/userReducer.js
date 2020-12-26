export default function petReducer(
	state = { loggedInState: 'NOT_LOGGED_IN', user: {} },
	action
) {
    // debugger
	switch (action.type) {
		case 'GET_USER':
			return { ...state, ...action.payload };

		default:
			return state;
	}
}
