import { Button, Container } from 'react-bootstrap';
import React from 'react';
import '../styles/canvas.css';
import NameStatusBar from './NameStatusBar';

const Dashboard = (props) => {
	const { user, loggedInStatus, getPet, history, clearUser } = props;

	const handleClick = (petId) => {
		getPet(petId);
		history.push('/canvas');
	};

	const handleLogout = (e) =>{
		e.preventDefault()
		clearUser()
		history.push('/')
	}

	const newPet = (e) =>{
		history.push('/game')
	}
	// debugger
	if (user !== undefined && loggedInStatus === true) {
		return (
			<Container
				id="canvasSetting"
				style={{
					maxWidth: '540px',
					borderStyle: 'ridge',
					borderWidth: '3px',
				}}
			>
				<div>
					<NameStatusBar user={user} />
					<br></br>
					<h2>Welcome, {user.email}</h2>
					<h1>Choose A Pet!</h1>
					<div className="d-flex flex-wrap">
						{user.pets &&
							user.pets.map((pet) => (
								<Button key={pet.id} onClick={() => handleClick(pet.id)} style={{ margin: '5px' }}>
									{pet.name}
								</Button>
							))}
							<Button onClick={(e) => newPet(e)}>New PEt</Button>
					</div>
					<Button onClick={(e) =>handleLogout(e)} style={{ float: 'right' }}>
						LogOut
					</Button>
				</div>
			</Container>
		);
	} else {
		return (
			<Container
				id="canvasSetting"
				style={{
					maxWidth: '540px',
					borderStyle: 'ridge',
					borderWidth: '3px',
				}}
			>
				<div>
					<h1 style={{ color: 'white' }}>LOADING...</h1>
				</div>
			</Container>
		);
	}
};

export default Dashboard;
