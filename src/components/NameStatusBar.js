import React, {useState} from 'react';
import {Container} from 'react-bootstrap'
import Hamburger from 'hamburger-react'

const NameStatusBar = (props) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
        <Container>
        <div style={{float: 'left'}}>
            <h1>{props.pet.name}</h1>
        </div>
        <div style={{float: 'right'}}>
       <Hamburger toggled={isOpen} toggle={setOpen}/>
        </div>
        </Container>
        </div>
    );
};

export default NameStatusBar;