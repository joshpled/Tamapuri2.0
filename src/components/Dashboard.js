import { Button, Container } from 'react-bootstrap';
import React from 'react';
import '../styles/canvas.css';
import NameStatusBar from './NameStatusBar';

const Dashboard = (props) => {
	debugger
	return (
		<Container
			id="canvasSetting"
			style={{
				maxWidth: '540px',
				borderStyle: 'ridge',
				borderWidth: '3px',
			}}
		>
			<NameStatusBar/>
		</Container>
	);
};

export default Dashboard;
