import React, { Component } from 'react';

import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './petapp.css';

import { updatePet } from '../../state/actions/petActions';
import { connect } from 'react-redux';
// import store from '../../state/store'

import MenuBar from '../../components/MenuBar/MenuBar';
import StatusBars from './components/StatusBars';
import Buttons from './components/Buttons';
import Sprite from './components/Sprite';

class PetApp extends Component {
	render() {
		// return (
		// 	<div>Hello</div>
		// )
		const { pet } = this.props;
		const motionEffect = {
			hidden: {
				opacity: 0,
			},
			visible: {
				opacity: 1,
				transition: {
					delay: 0.4,
				},
				duration: 4,
			},
		};

		return (
			<Container id="canvasSetting">
				<motion.div initial="hidden" animate="visible" variants={motionEffect}>
					<MenuBar pet={pet} location={'pet'}/>
					<div style={{ height: '60px' }} />
					<Sprite />
					<StatusBars pet={pet} />
					<Buttons pet={pet} updatePet={this.props.updatePet} />
				</motion.div>
			</Container>
		);
	}
}
// export default PetApp

export default connect((state) => state.pet, { updatePet })(PetApp);
