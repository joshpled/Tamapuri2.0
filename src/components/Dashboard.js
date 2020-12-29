import React from 'react'
import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap'


export default function Dashboard(props) {
       
    // debugger
    if (props.isLoggedIn !== "NOT_LOGGED_IN"){
    return (
        <div>
            <h1 style={{color: 'white'}}>HELLO {props.user.email}</h1>
            <Button onClick={props.handleLogout}>LogOut</Button>
            <Button onClick={() => props.history.push('/name')}>New Name</Button>
            {props.user.pets.map((pet) => <Button>{pet.name}{pet.id}</Button>)}
        </div>
    ) 
} else {
        return <Redirect to="/" />
    }
}
