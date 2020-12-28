export const storeUser = (payload) => {
	return (dispatch) => {
		dispatch({ type: 'SET_USER', payload });
	};
};

export const clearUser = () => {
	return (dispatch) => {
		dispatch({ type: 'CLEAR_USER'});
	};
};
