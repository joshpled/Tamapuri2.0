import React, { Component } from 'react';

import './menu.css';
import { Modal, Button } from 'react-bootstrap';

import HomeMenu from './Menus/HomeMenu';
import DashboardMenu from './Menus/DashboardMenu';
import UserAuthMenu from './Menus/UserAuthMenu';
import PetMenu from './Menus/PetMenu';


class Menu extends Component {
	constructor(props, context) {
		super(props, context);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {
			show: false,
		};
	}

	handleShow() {
		this.setState({ show: true });
	}
	handleClose() {
		this.props.toggle();
		this.setState({ show: false });
	}

	menuFormat() {
		switch (this.props.location) {
			case 'home':
				return <HomeMenu />;
			case 'dashboard':
				return <DashboardMenu />;
			case 'userAuth':
				return <UserAuthMenu />;
			case 'pet':
				return <PetMenu />;
			default:
				return <h2>Hello</h2>;
		}
	}

	logoutButton(){
		if (this.props.location === 'home' || this.props.location === 'userAuth' ){
			return false 
		} else{
			return true
		}
	}

	render() {
		return (
			<>
				<Modal show={this.state.show} onHide={() => this.handleClose()} contentClassName={'custom'}>
					<Modal.Header>
						<Modal.Title id="center-title">Menu</Modal.Title>
					</Modal.Header>

					{this.menuFormat()}

					<Modal.Footer>
						{this.logoutButton() && <Button className="learn-more" onClick={() => this.props.clearUser()}>
							Logout
						</Button>}
						<Button className="learn-more" onClick={() => this.handleClose()}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default Menu;
