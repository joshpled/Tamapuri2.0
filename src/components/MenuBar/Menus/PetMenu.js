import React from 'react'

import {connect} from 'react-redux';
import {deletePet} from '../../../state/actions/petActions'

import { useHistory } from 'react-router-dom';

import {Modal, Button} from 'react-bootstrap'

const _PetMenu = (props) => {
    const history = useHistory()
    const handleDelete = (e) => {
        e.preventDefault()
        props.deletePet(props.pet.id)

        history.push('/dashboard')
    }

    return (
        <Modal.Body>
            <Button className="learn-more">Go To Store</Button>
            <Button className="learn-more">Go To Las Vegas</Button>
            <Button className="learn-more" onClick={(e) => handleDelete(e)}>Delete Pet</Button>
          </Modal.Body>
    )
}

const PetMenu = connect(state=>state.pet,{deletePet })(_PetMenu)

export default PetMenu;