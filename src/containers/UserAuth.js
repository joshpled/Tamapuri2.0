import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../components/auth/Login'
import Registration from '../components/auth/Registration'

export class UserAuth extends Component {
    render() {
        return (
            <div>
                <Registration />
                <Login />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth)
