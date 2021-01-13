import React from 'react';
//styling
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../home.css';

export default function Buttons() {
	return (
		<Container className="d-flex justify-content-center">
			<Link
				to={{
					pathname: '/user_auth',
					state: { choice: 'login' },
				}}
			>
				<motion.button
					whileHover={{ scale: 1.2, x: '-5px' }}
					whileTap={{ scale: 0.9 }}
					className="btn btn-primary btn-sm"
					id="buttonSetting"
				>
					Login
				</motion.button>
			</Link>
			<Link to="/user_auth">
				<motion.button
					whileHover={{ scale: 1.2, x: '5px' }}
					whileTap={{ scale: 0.9 }}
					className="btn btn-secondary btn-sm"
					id="buttonSetting"
				>
					Register
				</motion.button>
			</Link>
		</Container>
	);
}
