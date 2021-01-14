import React, { Component } from 'react';

import './dashboard.css'
import {Container} from 'react-bootstrap'
import { connect } from 'react-redux'

import MenuBar from '../../components/MenuBar/MenuBar';
import PetList from './components/PetList'

class Dashboard extends Component {

    componentDidUpdate(){
        this.props.user.logged_in ? console.log('logged_in') : this.props.history.push('/')
    }

    render() {
        return (
            <Container id="canvasSetting">
                <MenuBar user={this.props.user} location={'dashboard'}/>
                <PetList user={this.props.user}/>
            </Container>
        );
    }
}

export default connect(state=>state.user)(Dashboard);