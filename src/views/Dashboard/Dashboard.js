import React, { Component } from 'react';

import {Container} from 'react-bootstrap'

import MenuBar from '../../components/MenuBar/MenuBar';


class Dashboard extends Component {
    render() {
        return (
            <Container>
                <MenuBar />
            </Container>
        );
    }
}

export default Dashboard;