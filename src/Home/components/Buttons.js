import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../home.css';

export default function Buttons() {
	return (
		<Container className="d-flex justify-content-center">
			<Button variant="primary" id="buttonSetting" size="sm">
				Login
			</Button>
			<Button variant="secondary" id="buttonSetting" size="sm">
				Register
			</Button>
		</Container>
	);
}
