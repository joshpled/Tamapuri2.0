import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { storeUser, clearUser, loginUser, registerUser } from '../actions/authActions';
import {getPet} from '../actions/petActions'
import Dashboard from '../components/Dashboard';
import UserAuth from './UserAuth';
import NewPetForm from '../components/NewPetForm';
import DisplayCanvas from './DisplayCanvas'

import { config } from '../Constants';
var url = config.url.AUTH_URL;

const history = createBrowserHistory();

class App extends Component {
		constructor(props) {
		super(props);
		this.state = {
			authorized: false,
		};
		this.checkUser = this.checkUser.bind(this);
	}

	checkUser(loggedInStatus) {
		fetch(url + 'logged_in/', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.logged_in === true && loggedInStatus === false) {
					this.props.storeUser(data);
					this.setState({
						authorized: true,
					});
				} else if (data.logged_in === false && loggedInStatus === true) {
					this.props.clearUser();
					this.setState({
						authorized: false,
					});
				}
			})
			.catch((error) => {
				console.log('LOGIN ERRORS:', error);
			});
	}

	componentDidMount() {
		this.checkUser(this.props.loggedInStatus);
	}

	render() {
		const { loggedInStatus, user, loading, getPet, registerUser, loginUser, clearUser } = this.props;
		return (
			<Router history={history}>
				<Switch>
					<Route exact path="/" render={(props) => <UserAuth {...props} loginUser={loginUser} checkUser={this.checkUser} loggedInStatus={loggedInStatus} registerUser={registerUser}/>} />
					{this.state.authorized && (
						<Route
							exact
							path="/dashboard"
							render={(props) => (
								<Dashboard {...props} user={user} loggedInStatus={loggedInStatus} loading={loading} clearUser={clearUser} getPet={getPet} />
							)}
						/>
					)}
					{this.state.authorized && (
						<Route
							exact
							path="/game"
							render={(props) => (
								<NewPetForm {...props} user={user} loggedInStatus={loggedInStatus} loading={loading} checkUser={this.checkUser} />
							)}
						/>
					)}
					{this.state.authorized && (
						<Route
							exact
							path="/canvas"
							render={(props) => (
								<DisplayCanvas {...props} user={user} loggedInStatus={loggedInStatus} loading={loading} checkUser={this.checkUser} />
							)}
						/>
					)}
				</Switch>
			</Router>
		);
	}
}

export default connect((state) => state.user, {
	storeUser,
	clearUser,
	loginUser,
	getPet, 
	registerUser
})(App);
