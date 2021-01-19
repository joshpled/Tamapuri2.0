import React from 'react'

import {connect} from 'react-redux';
import {deletePet} from '../../../state/actions/petActions'

import {Modal, Button} from 'react-bootstrap'

const _PetMenu = (props) => {
    return (
        <Modal.Body>
            <Button className="learn-more">Go To Store</Button>
            <Button className="learn-more">Go To A-Vale</Button>
            <Button className="learn-more" onClick={() => props.deletePet(props.pet.id)}>Delete Pet</Button>
          </Modal.Body>
    )
}

const PetMenu = connect(state=>state.pet,{deletePet})(_PetMenu)

export default PetMenu;