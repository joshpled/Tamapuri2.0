import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { updatePet } from '../actions/petActions';
import Buttons from '../components/Buttons';
import StatusBars from '../components/StatusBars';
import Sprite from '../components/Sprite';
import MenuBar from '../MenuBar/MenuBar';

class DisplayCanvas extends Component {
	render() {
		const { pet, loading } = this.props.pet;
		return (
			<div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {
							opacity: 0,
						},
						visible: {
							opacity: 1,
							transition: {
								delay: 0.4,
							},
							duration: 4,
						},
					}}
				>
					<Container
						style={{
							maxWidth: '540px',
							borderStyle: 'ridge',
							borderWidth: '3px',
						}}
					>
						<div style={{ height: '10px' }} />
						<MenuBar pet={pet} user={this.props.user} />
						<div style={{ height: '60px' }} />
						<Sprite />
						<StatusBars pet={pet} loading={loading} />
						<Buttons pet={pet} updatePet={this.props.updatePet} />
					</Container>
				</motion.div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		pet: state.pet,
		loading: state.loading,
		user: state.user.user,
	};
};

export default connect(mapStateToProps, { updatePet })(DisplayCanvas);
