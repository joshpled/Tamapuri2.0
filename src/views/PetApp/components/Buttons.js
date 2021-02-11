import React, { Component } from 'react';
import CircleButton from '../CircleButton';
import '../petapp.css'

class Buttons extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
	}

	render() {
		return (
			<div className='items'>
				<button onClick={this.handleClick} className='btn btn-primary btn-jelly items-button' >Items</button>
			</div>
		);
	}
}

export default Buttons;
 