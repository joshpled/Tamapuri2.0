import React from 'react';
//router
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
//Redux
import store from './state/store'
//styling
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Routes from './Routes'
import { Provider } from 'react-redux';

render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
