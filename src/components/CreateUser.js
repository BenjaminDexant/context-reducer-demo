import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';

import usersContext from '../context/usersContext/usersContext';


const CreateUser = () => {
    const userState = useContext(usersContext);
    const { dispatchUsers } = userState;

const {register, handleSubmit}= useForm()

const onSubmit = (e) => {
    dispatchUsers({ type: "addUser", payload: e})
}


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name:
                    <input id="first_name" {...register("first_name")} type="text" name="first_name" />
                </label>
                <label>
                    City:
                    <input id="city" {...register("city")} type="text" name="city" />
                </label>
                <label>
                    Postcode:
                    <input id="first_name" {...register("postcode")} type="text" name="postcode" />
                </label>

                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default CreateUser
