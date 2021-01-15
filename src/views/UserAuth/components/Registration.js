import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button, Collapse } from 'react-bootstrap';

const emailVal = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const passVal = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/

const liStyle = {
	listStyleType: "none",
	color: 'red'
}

class Registration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			emailError: '',
			password: '',
			passwordError: '',
			password_confirmation: '',
			passConfError: '',
			registrationErrors: '',
			open: false,
			open1: false,
			open2: false
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

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	validateEmail = () => {
		const { email } = this.state;
		this.setState({
		  emailError: emailVal.test(email) ? null : 'Email is invalid'
		});
	  }

	  validatePassword = () => {
		const { password } = this.state;
		this.setState({
			passwordError: passVal.test(password) ? null : 'Password is invalid'
		});
	  }

	  validatePassConfirm = () => {
		const { password_confirmation } = this.state;
		this.setState({
			passConfError: this.state.password === password_confirmation ? null : "Passwords don't match"
		});
	  }

	  handleEmailVal(){
		this.setState({...this.state, open: !this.state.open})
		this.validateEmail()
	  }

	  handlePassVal(){
		this.setState({...this.state, open1: !this.state.open1})
		this.validatePassword()
	  }

	  handlePassConfVal(){
		this.setState({...this.state, open2: !this.state.open2})
		this.validatePassConfirm()
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
						aria-controls="email-validations"
						aria-expanded={this.state.open1}
						onBlur={() => this.handleEmailVal()}
					/>
					<Collapse in={this.state.open1}>
						<div id="email-validations">
							<ul>
								<li style={liStyle}>{this.state.emailError}</li>
							</ul>
						</div>
					</Collapse>
					<Form.Control
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleChange}
						style={{ marginBottom: '.5em' }}
						required
						aria-controls="password-validations"
						aria-expanded={this.state.open1}
						onBlur={() => this.handlePassVal()}
					/>
					<Collapse in={this.state.open1}>
						<div id="password-validations">
							<ul>
								<li style={liStyle}>{this.state.passwordError}</li>
							</ul>
						</div>
					</Collapse>
					<Form.Control
						type="password"
						name="password_confirmation"
						placeholder="Password Confirmation"
						value={this.state.password_confirmation}
						onChange={this.handleChange}
						style={{ marginBottom: '.5em' }}
						required
						aria-controls="passConf-validations"
						aria-expanded={this.state.open2}
						onBlur={() => this.handlePassConfVal()}
					/>
					<Collapse in={this.state.open2}>
						<div id="passConf-validations">
							<ul>
								<li style={liStyle}>{this.state.passConfError}</li>
							</ul>
						</div>
					</Collapse>
					<Button type="submit" style={{ marginTop: '10px' }}>
						Register
					</Button>
				</Form>
			</div>
		);
	}
}

export default withRouter(Registration);
