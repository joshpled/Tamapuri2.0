import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			loginErrors: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		const { email, password } = this.state;
		e.preventDefault();
		axios
			.post(
				'http://localhost:3090/sessions',
				{
					user: {
						email: email,
						password: password
					},
				},
				{ withCredentials: true }
			)
			.then((resp) => {
				if (resp.data.status === 'created'){
					console.log('session created', resp)
				}
			})
			.catch((error) => console.log('login error', error))
			
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>
					
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}


  
export default withRouter(Login) 