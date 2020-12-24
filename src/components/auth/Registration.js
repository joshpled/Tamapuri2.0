import React, { Component } from 'react';
import axios from 'axios';
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
		e.preventDefault();
		axios
			.post(
				'http://localhost:3090/registrations',
				{
					user: {
						email: email,
						password: password,
						password_confirmation: password_confirmation,
					},
				},
				{ withCredentials: true }
			)
			.then((resp) => {
				if (resp.data.status === 'created') {
					this.props.handleSuccessfulAuth(resp.data);
				}
			})
			.catch((error) => console.log('registration error', error));
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
		return (
			<div>
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
