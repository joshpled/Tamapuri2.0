import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			password_confirmation: '',
			registrationErrors: '',
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		const { email, password, password_confirmation } = this.state;
		const {registerUser, history} = this.props
		e.preventDefault();
		registerUser(email, password, password_confirmation)
		history.push('/dashboard')
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
		return (
			<div style={{marginTop: '40px'}}>
			<h1>REGISTER</h1>
				<Form onSubmit={this.handleSubmit}>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter your email"
						value={this.state.email}
						onChange={this.handleChange}
						style={{ marginBottom: '.5em' }}
						required
					/>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleChange}
						style={{ marginBottom: '.5em' }}
						required
					/>
					<Form.Control
						type="password"
						name="password_confirmation"
						placeholder="Password Confirmation"
						value={this.state.password_confirmation}
						onChange={this.handleChange}
						style={{ marginBottom: '.5em' }}
						required
					/>
					<Button type="submit" style={{ marginTop: '10px' }}>
						Register
					</Button>
				</Form>
			</div>
		);
	}
}

export default withRouter(Registration);
