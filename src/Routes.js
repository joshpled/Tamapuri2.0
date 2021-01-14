import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './views/Home/Home';
import Dashboard from './views/Dashboard/Dashboard';
import PetApp from './views/PetApp/PetApp';
import UserAuth from './views/UserAuth/UserAuth';

const customHistory = createBrowserHistory();

class Routes extends Component {
	render() {
		return (
			<Router history={customHistory}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/user_auth" component={UserAuth} />
					<Route path="/dashboard">
						<Dashboard history={customHistory}/>
					</Route>
					<Route path="/user/:id/pet/:id">
						<PetApp />
					</Route>
					<Route path="/user/:id/store"></Route>
				</Switch>
			</Router>
		);
	}
}

export default Routes;
