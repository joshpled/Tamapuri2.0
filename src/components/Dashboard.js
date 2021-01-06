import { Button } from 'react-bootstrap';
import React from 'react-router-dom'

const Dashboard = ({getPet, user, clearUser, loading, history, loggedInStatus, key }) => {

	const handleClick = (petId) => {
		getPet(petId);
		history.push('/canvas');
	};
debugger
	if (user !== undefined && loggedInStatus === true) {
		// debugger
		return (
			<div key={key}>
				<h1 style={{ color: 'white' }}>Welcome, {user.email}</h1>
				<Button onClick={() => clearUser()}>LogOut</Button>
				{user.pets.map((pet) => (
					<Button key={pet.id} onClick={() => handleClick(pet.id)}>
						{pet.name}
					</Button>
				))}
				{key}
			</div>
		);
	} else {
		return (
			<div key={key}>
		{key}
				<h1 style={{ color: 'white' }}>LOADING...</h1>
			</div>
		);
	}
};

export default Dashboard;
