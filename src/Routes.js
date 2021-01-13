import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from './views/Home/Home';
import Dashboard from './components/Dashboard';
import DisplayCanvas from './containers/DisplayCanvas';
import NewPetForm from './components/NewPetForm';
import UserAuth from './views/UserAuth/UserAuth';

const customHistory = createBrowserHistory();

class Routes extends Component {

	
	render() {
		return (
			<Router history={customHistory}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path='/user_auth' component={UserAuth} />
					<Redirect from="/users/:id" to="/users/profile/:id" />
					<Route path="/users/profile/:id">
						<Dashboard />
					</Route>
					<Dashboard />
					<Route path="/user/:id/pet/:id">
						<DisplayCanvas />
					</Route>
					<Route path="/user/:id/newPet">
						<NewPetForm />
					</Route>
					<Route path="/user/:id/store">
						
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default Routes;
