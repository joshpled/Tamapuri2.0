import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/auth/Login';
import Registration from '../components/auth/Registration';
import { Container, Jumbotron } from 'react-bootstrap';
import '../styles/canvas.css';

export class UserAuth extends Component {
	render() {
		return (
			<div>
				<Container
					id="canvasSetting"
					style={{
						maxWidth: '540px',
						borderStyle: 'ridge',
						borderWidth: '3px',
					}}
				>
					<Jumbotron fluid>
						<Container>
							<h1 className="display-2">Welcome</h1>
							<p className="font-weight-bold">
								Do you have an account?
							</p>
						</Container>
					</Jumbotron>
					
					<Login />
                    <Jumbotron fluid>
						<Container style={{marginTop: '20px'}}>
							<p className="font-weight-bold">
								Sign Up Here! 
							</p>
						</Container>
					</Jumbotron>
                    <Registration />
				</Container>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
