import React, { Component } from 'react';

import { Container, Jumbotron } from 'react-bootstrap';

import MenuBar from '../../components/MenuBar/MenuBar';
import Login from './components/Login';
import Registration from './components/Registration';

import { connect } from 'react-redux';
import { loginUser, registerUser } from '../../state/actions/authActions';

import './userAuth.css';

class UserAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			choice: '',
		};
	}

	componentDidMount() {
		this.setState(this.props.location.state);
	}

	render() {
		// debugger;
		return (
			<Container id="squareSetting">
				<MenuBar location={'userAuth'} />
				<Jumbotron style={{ marginTop: '140px' }}>
					<h1 className="display-2">Welcome!</h1>
				</Jumbotron>
				{this.state.choice === 'login' ? (
					<Login loginUser={this.props.loginUser} history={this.props.history} />
				) : (
					<Registration registerUser={this.props.registerUser} history={this.props.history} />
				)}
			</Container>
		);
	}
}

export default connect(null, { loginUser, registerUser })(UserAuth);
