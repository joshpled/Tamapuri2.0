import React from 'react'
import {Redirect} from 'react-router-dom'

export default function Dashboard(props) {

    if (props.isLoggedIn !== "NOT_LOGGED_IN"){
    return (
        <div>
            <h1 style={{color: 'white'}}>HELLO {props.user.email}</h1>
            <button onClick={props.handleLogout}>LogOut</button>
        </div>
    ) 
} else {
        return <Redirect to="/" />
    }
}
