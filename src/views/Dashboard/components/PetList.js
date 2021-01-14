import React from 'react'

export default function PetList(props) {
    const {user} = props
    const {pets} = props.user
    return (
        <div>
        <h1>Welcome, {user.email}</h1>
            {pets && pets.map((pet)=><li key={pet.id}>{pet.name}</li>)}
        </div>
    )
}
