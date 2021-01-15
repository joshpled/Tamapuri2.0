import React from 'react';

import { ProgressBar } from 'react-bootstrap';
import './hearts/Hud.css';
import '../petapp.css'

import Hearts from './hearts/Hearts';

const StatusBars = (props) => {
	const {pet} = props
	const barStyle = {
		height: '25px',
	};
	return (
		<div>
			<Hearts hearts={pet.health / 20} maxHearts={5} />
			<hr />
			<ProgressBar now={pet.fun} label={`Boredom ${pet.fun}%`} style={barStyle} />
			<br />
			<ProgressBar now={pet.hunger} label={`Hunger ${pet.hunger}%`} style={barStyle} />
			<br />
			<ProgressBar now={pet.hygiene} label={`Hygiene ${pet.hygiene}%`} style={barStyle} />
			<br />
			<ProgressBar now={pet.energy} label={`Energy ${pet.energy}%`} style={barStyle} />
		</div>
	);
};

export default StatusBars;
