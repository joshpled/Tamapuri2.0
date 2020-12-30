import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import { storeUser, clearUser } from './actions/authActions';

class ProtectRoutes extends Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.checkLoginStatus = this.checkLoginStatus.bind(this);
	}

	checkLoginStatus() {
		axios
			.get(`${url}logged_in/`, { withCredentials: true })
			.then((response) => {
				if (
					response.data.logged_in === true &&
					this.props.loggedInStatus === 'NOT_LOGGED_IN'
				) {
					this.props.storeUser({
						loggedInStatus: 'LOGGED_IN',
						user: response.data,
					});
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
			.delete(`${url}logout/`, { withCredentials: true })
			.then((response) => {
				this.props.clearUser();
				this.props.history.push('/');
			})
			.catch((error) => {
				console.log('logout error', error);
			});
	}

	handleLogin(data) {
		// debugger
		this.props.storeUser(data);
		return <Redirect to="/dashboard" />;
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>

                </Switch>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	// debugger
	return {
		loggedInStatus: state.user.loggedInStatus,
		user: state.user.user,
	};
};

export default connect(mapStateToProps, { storeUser, clearUser } )(ProtectRoutes)