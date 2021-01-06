import { config } from '../Constants';
var url = config.url.AUTH_URL;

export const storeUser = (payload) => {
	return (dispatch) => {
		dispatch({ type: 'SET_USER', payload });
	};
};

export const clearUser = () => {
	return (dispatch) => {
		fetch(url + 'logout/', {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		})
			.then(() => {
				dispatch({ type: 'CLEAR_USER' });
			})
			.catch((error) => console.log(error));
	};
};

export const loginUser = (email, password) => {
	let loginData = {
		email: email,
		password: password,
	};
	
	return (dispatch) => {
		dispatch({ type: 'LOADING_USER'});
		fetch(url + 'sessions/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({ user: loginData }),
		})
			.then((response) => response.json())
			.then((json) => {
				dispatch({ type: 'SET_USER', payload: json });
			})
			.catch((error) => console.log(error));
	};
};
