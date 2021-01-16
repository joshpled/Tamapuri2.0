import React from 'react'

import {Modal, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'

export default function DashboardMenu() {

    const dispatch = useDispatch()

    return (
        <Modal.Body>
            <Button className="learn-more">Go To Store</Button>
            <Button className="learn-more">Go To A-Vale</Button>
            <Button className="learn-more">Change Pet Color</Button>
            <Button className="learn-more">Delete Pet</Button>
            <Button onClick={() => dispatch({ type: 'CLEAR_USER' })} className="learn-more">Logout</Button>
          </Modal.Body>
    )
}
