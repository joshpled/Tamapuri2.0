import React from 'react'
import {Redirect} from 'react-router-dom'

export default function Dashboard(props) {
    // debugger
    if (props.isLoggedIn !== "NOT_LOGGED_IN"){
        // debugger
    return (
        <div>
            <h1 style={{color: 'white'}}>HELLO {props.user.email}</h1>
            <button onClick={props.handleLogout}>LogOut</button>
            <button onClick={() => props.history.push('/name')}>New Name</button>
        </div>
    ) 
} else {
        return <Redirect to="/" />
    }
}
