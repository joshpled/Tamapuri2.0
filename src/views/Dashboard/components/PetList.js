import React from 'react';
import { Button  } from 'react-bootstrap';
import '../dashboard.css'

export default function PetList(props) {
    const { pets } = props.user;

	return (
		<div>
			{pets &&
				pets.map((pet) => 
                    <Button key={pet.id} id="buttonSetting">{pet.name}</Button>
				)}
		</div>
	);
}
