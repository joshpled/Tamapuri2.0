import React, { Component } from 'react';
//styling
import { Container, Image } from 'react-bootstrap';
import './home.css';
//components
import NameStatusBar from '../../components/NameStatusBar';
import Buttons from './components/Buttons';
import LogoImage from './components/LogoImage';

class Home extends Component {
	render() {
		return (
			<Container id="squareSetting">
				<NameStatusBar home={true}/>
				<LogoImage />
				<Buttons />
			</Container>
		);
	}
}

export default Home;
