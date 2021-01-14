import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './hearts/Hud.css';
import Hearts from './hearts/Hearts';

const StatusBars = (props) => {
	const barStyle = {
		height: '30px',
	};
	return (
		<div>
			<Hearts hearts={props.pet.health / 20} maxHearts={5} />
			<br />
			<ProgressBar now={props.pet.fun} label={`Boredom ${props.pet.fun}%`} style={barStyle} />
			<br />
			<ProgressBar now={props.pet.hunger} label={`Hunger ${props.pet.hunger}%`} style={barStyle} />
			<br />
			<ProgressBar now={props.pet.hygiene} label={`Hygiene ${props.pet.hygiene}%`} style={barStyle} />
			<br />
			<ProgressBar now={props.pet.energy} label={`Energy ${props.pet.energy}%`} style={barStyle} />
		</div>
	);
};

export default StatusBars;
