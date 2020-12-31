import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { storeUser, clearUser, loginUser } from './actions/authActions';
import Dashboard from './components/Dashboard';
import UserAuth from './containers/UserAuth';
import NewPetForm from './containers/NewPetForm';
import DisplayCanvas from './containers/DisplayCanvas'

import { config } from './Constants';
var url = config.url.AUTH_URL;

const history = createBrowserHistory();

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authorized: false,
		};
		this.checkUser = this.checkUser.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
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

	handleLogin(email, password) {
		this.props.loginUser(email, password);
		history.push('/dashboard');
	}

	render() {
		const { loggedInStatus, user, loading } = this.props;
		return (
			<Router history={history}>
				<Switch>
					<Route exact path="/" render={(props) => <UserAuth {...props} handleLogin={this.handleLogin} />} />
					{this.state.authorized && (
						<Route
							exact
							path="/dashboard"
							render={(props) => (
								<Dashboard {...props} user={user} loggedInStatus={loggedInStatus} loading={loading} clearUser={this.props.clearUser} />
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
})(App);
