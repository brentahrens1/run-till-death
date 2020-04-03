import React, { useState } from 'react'

import userService from '../../utils/userService'

import {
    AuthContainer,
    AuthForm
} from './AdminAuthStyle'

const AdminAuth = (props) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleChange = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value)
        } else {
            setPassword(event.target.value)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const credentials = {
            email: email,
            password: password
        }
        try {
            await userService.signup(credentials)
            props.history.push('/')
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <AuthContainer>
            <h1>Admin Sign Up</h1>
            <AuthForm onSubmit={handleSubmit}> 
                <input type="email" placeholder="email" name="email" onChange = {handleChange}></input>
                <input type="password" placeholder="password" name="password" onChange = {handleChange}></input>
                <button type="submit" name="submit">Sign Up</button>
            </AuthForm>
        </AuthContainer>
    )
}


export default AdminAuth