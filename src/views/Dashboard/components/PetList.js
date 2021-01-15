import React from 'react';
import { Button  } from 'react-bootstrap';
import '../dashboard.css'

export default function PetList(props) {
	const { pets } = props.user;
	const {getPet, history} = props

	const handleClick = (id) => {
		getPet(id)
		history.push('/petapp')
	}

	return (
		<div>
			{pets &&
				pets.map((pet) => 
                    <Button key={pet.id} id="buttonSetting" onClick={() => handleClick(pet.id)}>{pet.name}</Button>
				)}
		</div>
	);
}
