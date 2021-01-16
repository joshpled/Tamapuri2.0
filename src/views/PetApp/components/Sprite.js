import React from 'react';
import { useSprite } from 'react-sprite-animator';
import { Container } from 'react-bootstrap';

const Sprite = () => {
	const styles = useSprite({
		sprite: '/images/spriteIdle.png',
		width: 530,
		height: 350,
		fps: 12,
		direction: 'horizontal',
		scale: 1.5,
	});
	return <Container fluid style={styles}/>;
};

export default Sprite;
