import React from 'react'

const UserCard = (user) => {
    return (
        <div>
            <h1>{user.first_name}</h1>
            <h2>{user.state}</h2>
            <p>{user.city}</p>
        </div>
    )
}

export default UserCard
