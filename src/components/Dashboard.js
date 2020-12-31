import { Button } from 'react-bootstrap';
import React from 'react';

const Dashboard = ({loading, loggedInStatus, user, history, clearUser}) => {
	if (!user){
		return (<div>
			<h1 style={{color: 'white'}}>LOADING...</h1>
		</div>)
	} else {
		return (<div>
			<h1 style={{color: 'white'}}>Welcome, {user.email}</h1>
			<Button onClick={()=>clearUser()}>LogOut</Button>
			{user.pets.map((pet)=><Button key={pet.id} href='/game'>{pet.name}</Button>)}
		</div>)
	}
	
}

export default Dashboard