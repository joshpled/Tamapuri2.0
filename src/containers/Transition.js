import React, { Component } from 'react';
import LoadingBar from '../components/LoadingBar';
import { Redirect } from 'react-router-dom';

class Transition extends Component {
	state = {
		redirect: false,
	};

	componentDidMount() {
		this.id = setTimeout(() => this.setState({ redirect: true }), 2500);
	}

	componentWillUnmount() {
		clearTimeout(this.id);
	}

	render() {
		const { isLoggedIn } = this.props;
		const { redirect } = this.state;
		if (isLoggedIn && redirect) {
			return <Redirect to="/game" />;
		} else if (!isLoggedIn && redirect) {
			return <Redirect to="/userauth" />;
		} else {
			return (
				<div>
					<LoadingBar />
				</div>
			);
		}
	}
}

export default Transition;
