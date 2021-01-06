import { config } from '../Constants';
var url = config.url.BASE_URL;

export const createNewPet = (name, userId) => {
	let data = {
		name: name.charAt(0).toUpperCase() + name.slice(1),
		user_id: userId.id,
	};
	return (dispatch) => {
		dispatch({ type: 'CREATING_PET' });
		fetch(url + 'pets/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ pet: data }),
		})
			.then((response) => response.json())
			.then((data) => dispatch({ type: 'CREATE_PET', payload: data }))
			.catch((error) => console.log(error));
	};
};

export const updatePet = (pet, petId) => {
	const data = pet;

	return (dispatch) => {
		dispatch({ type: 'CHANGING_ATTRIBUTE' });
		fetch(url + 'pets/' + petId, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({ pet: data }),
		})
			.then((resp) => resp.json())
			.then((json) => dispatch({ type: 'CHANGE_ATTRIBUTE', payload: json }));
	};
};

export const getPet = (petId) => {
	return (dispatch) => {
		dispatch({ type: 'LOADING' });
		fetch(url + 'pets/' + petId)
			.then((resp) => resp.json())
			.then((json) => dispatch({ type: 'GET_PET', payload: json }));
	};
};
