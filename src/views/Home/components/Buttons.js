import React from 'react';
//styling
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../home.css';

export default function Buttons() {
	return (
		<Container className="d-flex justify-content-center">
			<Link  to={{
            pathname: "/user_auth",
            state: { choice: 'login' }
          }}>
				<Button type="button" variant="primary" id="buttonSetting" size="sm">
					Login
				</Button>
			</Link>
			<Link to="/user_auth">
				<Button variant="secondary" id="buttonSetting" size="sm">
					Register
				</Button>
			</Link>
		</Container>
	);
}
