import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Dashboard from './components/Dashboard';
import DisplayCanvas from './containers/DisplayCanvas';
import NewPetForm from './components/NewPetForm';

class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={Home} />
					<Redirect from="/users/:id" to="/users/profile/:id" />
					<Route path="/users/profile/:id">
						<Dashboard />
					</Route>
					<Dashboard />
					<Route path="/pet/:id">
						<DisplayCanvas />
					</Route>
					<Route path="/user/:id/newPet">
						<NewPetForm />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default Routes;
