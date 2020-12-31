import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		const { email, password } = this.state;
		e.preventDefault();
		this.props.handleLogin(email, password)
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

					<Button type="submit" style={{ marginTop: '10px' }}>
						Login
					</Button>
				</Form>
			</div>
		);
	}
}

export default Login;
