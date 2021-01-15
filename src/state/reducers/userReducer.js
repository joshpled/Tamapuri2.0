export default function userReducer(state = { loggedInStatus: false, user: {}, loading: false }, action) {
	switch (action.type) {
		case 'GETTING_USER':
			return {
				...state,
				loading: true
			};

		case 'SET_USER':
			return {
				loggedInStatus: true,
				user: {...action.payload},
				loading: false,
			};

			case 'LOADING_USER':
				return{
					...state,
					loading: true 
				}

		case 'CLEAR_USER':
			return { ...state, loggedInStatus: false, user: {}, loading: false };

		default:
			return state;
	}
}
