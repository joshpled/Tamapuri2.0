import React from 'react'

import {Modal, Button} from 'react-bootstrap'

export default function HomeMenu() {
    return (
        <Modal.Body>
            <Button className="learn-more">Go To Store</Button>
            <Button className="learn-more">Go To A-Vale</Button>
            <Button className="learn-more">Change Pet Color</Button>
          </Modal.Body>
    )
}
