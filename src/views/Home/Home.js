import React, { Component } from 'react';
//styling
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
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
				<center><Link to='/nologin'>Play without Login</Link></center>
			</Container>
		);
	}
}

export default Home;
