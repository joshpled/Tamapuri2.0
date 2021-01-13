import React, { Component } from 'react';

import { Container } from 'react-bootstrap';
import { createBrowserHistory } from "history";

import Hamburger from 'hamburger-react';
import Menu from './Menu';

const history = createBrowserHistory();

export default class NameStatusBar extends Component {
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
		// debugger
		return (
			<Container>
				<span onClick={() => history.goBack()} style={{ cursor: 'pointer', float: 'left'}}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="64"
						height="64"
						fillRule="currentColor"
						className="bi bi-arrow-left-short"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
						/>
					</svg>
				</span>
				<div style={{ float: 'right' }}>
					<span onClick={() => this.onMenuClick()}>
						<Hamburger toggled={this.state.isOpen} toggle={this.toggle} />
					</span>
					<Menu ref={this.menuModalRef} toggle={this.toggle} />
				</div>
			</Container>
		);
	}
}
