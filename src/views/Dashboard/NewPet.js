import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import {connect} from 'react-redux'
import { createNewPet } from '../../state/actions/petActions';


class NewPet extends Component {

    constructor(props) {
        super(props)
        this.state={
            petName: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
	handleClose() {
		this.props.handleNewPet();
    }
    
    handleChange(e){
        this.setState({
			petName: e.target.value,
		});
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createNewPet(this.state.petName,this.props.user.id)
        this.props.history.push('/petapp')
    }

	render() {
		return (
			<Modal show={this.props.open} onHide={this.handleClose}>
				<Modal.Header>
					<Modal.Title>Lets hatch a new pet!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={(e) => this.handleSubmit(e)}>
						<Form.Group controlId="formGroupName">
							<Form.Control value={this.state.name} type="name" placeholder="Pet's Name?" onChange={this.handleChange} />
						</Form.Group>
						<Button type='submit' style={{float: 'right'}}>Submit</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={this.props.handleNewPet}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default connect(null,{createNewPet})(NewPet);