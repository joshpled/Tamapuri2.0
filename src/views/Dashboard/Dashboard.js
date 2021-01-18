import React, { Component } from 'react';

import './dashboard.css';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { getPet } from '../../state/actions/petActions';

import MenuBar from '../../components/MenuBar/MenuBar';
import PetList from './components/PetList';
import NewPet from './NewPet';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};

		this.handleNewPet = this.handleNewPet.bind(this);
	}

	handleNewPet() {
		this.setState({
			open: !this.state.open,
		});
	}

	render() {
		const { user, getPet, history } = this.props;
		return (
			<Container id="canvasSetting">
				<MenuBar user={user} location={'dashboard'} />
				<Jumbotron style={{ marginTop: '70px' }}>
					<h1 className="display-4">Welcome, {user.username}!</h1>
				</Jumbotron>
				<hr />
				<PetList user={user} getPet={getPet} history={history} />
				<Button onClick={() => this.handleNewPet()} id="sendToBottom">
					Hatch New Pet
				</Button>
				<NewPet open={this.state.open} handleNewPet={this.handleNewPet} user={user} history={history} />
			</Container>
		);
	}
}

export default connect((state) => state.user, { getPet })(Dashboard);
