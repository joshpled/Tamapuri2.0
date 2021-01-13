import React from 'react';
//router
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
//styling
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Routes from './Routes'

const store = createStore(
	reducer,
	compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
