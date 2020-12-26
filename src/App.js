import React, { Component } from 'react';
import { connect } from 'react-redux';
import Transition from './containers/Transition';
import DisplayCanvas from './containers/DisplayCanvas';
import SplashScreen from './components/SplashScreen';
import NewPetForm from './containers/NewPetForm';
import UserAuth from './containers/UserAuth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { storeUser } from './actions/authActions';

class App extends Component {
	checkLoginStatus() {
		axios
			.get('http://localhost:3090/logged_in', { withCredentials: true })
			.then((response) => {
				if (
					response.data.logged_in &&
					this.props.state.loggedInStatus === 'NOT_LOGGED_IN'
				) {
					debugger
					this.props.storeUser({
						loggedInStatus: 'LOGGED_IN',
						user: response.data.user,
					});
				} else if (
					!response.data.logged_in &&
					this.state.loggedInStatus === 'LOGGED_IN'
				) {
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
		this.setState({
			loggedInStatus: 'NOT_LOGGED_IN',
			user: {},
		});
	}

	handleLogin(data) {
		this.setState({
			loggedInStatus: 'LOGGED_IN',
			user: data.user,
		});
	}

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/game" component={DisplayCanvas} />
					<Route exact path="/" component={SplashScreen} />
					<Route exact path="/name" component={NewPetForm} />
					<Route
						exact
						path="/loading"
						render={(props) => (
							<Transition {...props} isLoggedIn={this.props.loggedInState} />
						)}
					/>
					<Route
						exact
						path="/userauth"
						render={(props) => (
							<UserAuth
								{...props}
								handleLogin={this.handleLogin}
								isLoggedIn={this.props.loggedInState}
							/>
						)}
					/>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loggedInState: state.user.loggedInState,
		user: state.user.user,
	};
};

export default connect(mapStateToProps, { storeUser })(App);
