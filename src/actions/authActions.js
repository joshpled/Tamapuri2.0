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
	let data = {
		email: email,
		password: password,
	};
	
	return (dispatch) => {
		fetch(url + 'sessions/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({ user: data }),
		})
			.then((response) => response.json())
			.then((data) => {
				dispatch({ type: 'SET_USER', data });
			})
			.catch((error) => console.log(error));
	};
};
