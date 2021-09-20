import React, { useContext } from 'react'

import UserCard from './UserCard'
import usersContext from '../context/usersContext/usersContext';


const DisplayUsers = () => {
    const userState = useContext(usersContext);
    const { state } = userState;

console.log(state)

    return (
        <div>
            {state.users.map(user =>
                <UserCard key={user.id} {...user} />)
            }
        </div>
    )
}

export default DisplayUsers
