import React, { Component } from 'react';

import { Container } from 'react-bootstrap';
import { createBrowserHistory } from 'history';

import {connect} from 'react-redux'
import {clearUser} from '../../state/actions/authActions'

import Hamburger from 'hamburger-react';
import Menu from './Menu';

import Backarrow from '../Icons';

const history = createBrowserHistory();

class MenuBar extends Component {
	constructor(props, context) {
		super(props, context);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	menuModalRef = (obj) => {
		this.showModal = obj && obj.handleShow;
	};

	onMenuClick = () => {
		this.showModal();
	};

	render() {
		return (
			<Container>
				{!this.props.home && (
					<span onClick={() => history.goBack()} style={{ cursor: 'pointer', float: 'left' }}>
						<Backarrow />
					</span>
				)}
				{!this.props.home && (
					<div style={{ float: 'right' }}>
						<span onClick={() => this.onMenuClick()}>
							<Hamburger toggled={this.state.isOpen} toggle={this.toggle} />
						</span>
						<Menu ref={this.menuModalRef} toggle={this.toggle} location={this.props.location} clearUser={this.props.clearUser} />
					</div>
				)}
			</Container>
		);
	}
}

export default connect(null, {clearUser})(MenuBar)