import { config } from './Constants';
var url = config.url.BASE_URL;

export const getItems = () => {
	return (dispatch) => {
		dispatch({ type: 'GETTING_ITEMS' });
		fetch(url + 'items/')
			.then((response) => response.json())
			.then((data) => dispatch({ type: 'GET_ITEMS', payload: data }));
	};
};
