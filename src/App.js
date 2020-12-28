import React, { Component } from 'react';
import { connect } from 'react-redux';
import Transition from './containers/Transition';
import DisplayCanvas from './containers/DisplayCanvas';
import SplashScreen from './components/SplashScreen';
import Dashboard from './components/Dashboard';
import UserAuth from './containers/UserAuth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import { storeUser, clearUser } from './actions/authActions';
import NewPetForm from './containers/NewPetForm';

import { config } from './Constants';
var url = config.url.AUTH_URL;

class App extends Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.checkLoginStatus = this.checkLoginStatus.bind(this);
	}

	checkLoginStatus() {
		axios
			.get(`${url}/logged_in/`, { withCredentials: true })
			.then((response) => {
				// //debugger
				if (
					response.data.logged_in === true &&
					this.props.loggedInStatus === 'NOT_LOGGED_IN'
				) {
					this.props.storeUser({
						loggedInStatus: 'LOGGED_IN',
						user: response.data.user,
					});
					console.log(this.props.state);
					this.props.history.push('/dashboard');
				} else if (
					response.data.logged_in === false &&
					this.props.loggedInStatus === 'LOGGED_IN'
				) {
					console.log(this.props.state);
					this.props.storeUser({ loggedInStatus: 'NOT_LOGGED_IN', user: {} });
				}
			})
			.catch((error) => {
				console.log('check login error', error);
			});
	}

	componentDidMount() {
		this.checkLoginStatus();
	}

	handleLogout() {
		// //debugger
		axios
			.delete(`${url}/logout/`, { withCredentials: true })
			.then((response) => {
				this.props.clearUser();
				this.props.history.push('/');
			})
			.catch((error) => {
				console.log('logout error', error);
			});
	}

	handleLogin(data) {
		this.props.storeUser(data);
		return (<Redirect to="/dashboard"/>)
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/game" component={DisplayCanvas} />
					<Route
						exact
						path="/"
						render={(props) => (
							<SplashScreen
								{...props}
								isLoggedIn={this.props.loggedInStatus}
								user={this.props.user}
							/>
						)}
					/>
					<Route
						exact
						path="/dashboard"
						render={(props) => (
							<Dashboard
								{...props}
								user={this.props.user}
								isLoggedIn={this.props.loggedInStatus}
								checkLoginStatus={this.checkLoginStatus}
								handleLogout={this.handleLogout}
							/>
						)}
					/>
					<Route
						exact
						path="/loading"
						render={(props) => (
							<Transition {...props} isLoggedIn={this.props.loggedInStatus} />
						)}
					/>
					<Route
						exact
						path="/userauth"
						render={(props) => (
							<UserAuth
								{...props}
								handleLogin={this.handleLogin}
								isLoggedIn={this.props.loggedInStatus}
								user={this.props.user}
								storeUser={this.props.storeUser}
								checkLoginStatus={this.checkLoginStatus}
							/>
						)}
					/>
				</Switch>
				<Route exact path='/name' component={NewPetForm} />
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loggedInStatus: state.user.loggedInStatus,
		user: state.user.user,
	};
};

export default connect(mapStateToProps, { storeUser, clearUser })(App);
