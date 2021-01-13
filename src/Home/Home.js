import React, { Component } from 'react';
//styling
import { Container, Image } from 'react-bootstrap';
import './home.css';
//components
import NameStatusBar from '../components/NameStatusBar';
import Buttons from './components/Buttons'

class Home extends Component {
	render() {
		return (
			<Container id="squareSetting">
				<NameStatusBar />
				<Image fluid alt="logo" src="/images/Logo.png" id="imgSetting" />
				<Buttons />
			</Container>
		);
	}
}

export default Home;
