import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'

import { config } from '../../Constants';
var url = config.url.AUTH_URL;

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
				`${url}sessions`,
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
					this.props.handleLogin(resp.data)
				} else {
					this.setState({
						loginErrors: resp.data
					})
					console.log(resp)
				
				}
			})
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
						style={{marginBottom: '.5em'}}
						required
					/>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleChange}
						style={{marginBottom: '.5em'}}
						required
					/>
					
					<Button type="submit" style={{marginTop: '10px'}}>Login</Button>
				</Form>
			</div>
		);
	}
}


  
export default withRouter(Login) 