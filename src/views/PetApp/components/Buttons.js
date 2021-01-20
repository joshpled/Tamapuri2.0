import React, { Component } from 'react';

class Buttons extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		debugger;
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Items</button>
			</div>
		);
	}
}

export default Buttons;
