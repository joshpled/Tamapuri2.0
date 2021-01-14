import React, { Component } from 'react';

import './dashboard.css'
import {Container, Jumbotron} from 'react-bootstrap'
import { connect } from 'react-redux'

import MenuBar from '../../components/MenuBar/MenuBar';
import PetList from './components/PetList'

class Dashboard extends Component {
    

    componentDidUpdate(){
        this.props.user.logged_in ? console.log('logged_in') : this.props.history.push('/')
    }

    render() {
        const {user} = this.props
        return (
            <Container id="canvasSetting">
                <MenuBar user={user} location={'dashboard'}/>
                <Jumbotron style={{ marginTop: '70px' }}>
					<h1 className="display-4">Welcome, {user.username}!</h1>
				</Jumbotron>
                <hr/>
                <PetList user={user}/>
            </Container>
        );
    }
}

export default connect(state=>state.user)(Dashboard);