import React, { Component } from 'react';
//styling
import { Container } from 'react-bootstrap';
import './home.css';
//components
import MenuBar from '../../components/MenuBar/MenuBar';
import Buttons from './components/Buttons';
import LogoImage from './components/LogoImage';

class Home extends Component {
	render() {
		return (
			<Container id="squareSetting">
				<MenuBar home={true} location={'home'}/>
				<LogoImage />
				<Buttons />
			</Container>
		);
	}
}

export default Home;
