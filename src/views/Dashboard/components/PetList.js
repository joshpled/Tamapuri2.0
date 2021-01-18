import React from 'react';
import { Button, Table } from 'react-bootstrap';
import '../dashboard.css';

export default function PetList(props) {
	const { pets } = props.user;
	const { getPet, history } = props;

	const handleClick = (id) => {
		getPet(id);
		history.push('/petapp');
	};

	return (
		<Table striped bordered hover variant="dark">
			<thead>
				<tr>
					<th colSpan="2">Name</th>
					<th>Go To Pet</th>
				</tr>
			</thead>
			<tbody>
				{pets &&
					pets.map((pet) => (
						<>
							<tr>
								<td colSpan="2" key={pet.id}>{pet.name}</td>
								<td>
									<Button key={pet.id} id="buttonSetting" onClick={() => handleClick(pet.id)}>
										GO to {pet.name}
									</Button>
								</td>
							</tr>
						</>
					))}
			</tbody>
		</Table>
	);
}
