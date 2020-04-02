import React, { useState } from 'react'

import {
    AuthContainer,
    AuthForm
} from './AdminAuthStyle'

const AdminAuth = () => {
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
        // await userService.signup(credentials)
    }

    return (
        <AuthContainer>
            <h1>Admin Log In</h1>
            <AuthForm>
                <input type="email" placeholder="email" name="email" onChange = {handleChange}></input>
                <input type="password" placeholder="password" name="password" onChange = {handleChange}></input>
                <button type="submit" name="submit">Log In</button>
            </AuthForm>
        </AuthContainer>
    )
}


export default AdminAuth