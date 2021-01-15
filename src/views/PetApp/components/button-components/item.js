import React from 'react';

import { Button, Image } from 'react-bootstrap';

export default function item() {
	
	const buttonPadding = { padding: '.15rem .2rem .15rem .2rem' };
	const amountOwned = { color: 'black' };

	return (
		<Button variant="outline-info" style={buttonPadding}>
			<Image
				value="hunger"
				data-name="taco"
				data-value={30}
				src="/images/fruit.png"
				onClick={(e) => this.clickChange(e)}
				style={{
					height: '40px',
					padding: '.005rem .005rem',
				}}
			></Image>{' '}
			<span style={amountOwned}>3</span>
		</Button>
	);
}
