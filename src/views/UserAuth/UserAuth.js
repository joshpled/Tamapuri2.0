import React, { Component } from 'react';

import { Container, Jumbotron } from 'react-bootstrap';

import NameStatusBar from '../../components/NameStatusBar';
import Login from './components/Login';
import Registration from './components/Registration';

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
		return (
			<Container id="squareSetting">
			<NameStatusBar />
				<Jumbotron style={{marginTop: '140px'}}>
					<h1 className="display-2">Welcome!</h1>
				</Jumbotron>
				{this.state.choice === 'login' ? <Login /> : <Registration />}
			</Container>
		);
	}
}

export default UserAuth;
