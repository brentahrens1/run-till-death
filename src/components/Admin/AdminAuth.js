import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import adminService from '../../utils/adminService'

import {
    AuthContainer,
    AuthForm
} from './AdminAuthStyle'

const AdminAuth = (props) => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ loginEmail, setLoginEmail ] = useState('')
    const [ loginPassword, setLoginPassword ] = useState('')
    const history = useHistory()

    const handleSignupChange = (event) => {
        if (event.target.name === 'email') {
            setEmail(event.target.value)
        } else {
            setPassword(event.target.value)
        }
    }

    const handleSignup = async (event) => {
        event.preventDefault()
        const credentials = {
            email: email,
            password: password
        }
        try {
            await adminService.signup(credentials)
            props.setCurrentAdmin(adminService.getAdmin())
            history.push('/')
        }
        catch(err) {
            console.log(err)
        }
    }

    const handleLoginChange = (event) => {
        if (event.target.name === 'email') {
            setLoginEmail(event.target.value)
        } else {
            setLoginPassword(event.target.value)
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        const credentials = {
            email: loginEmail,
            password: loginPassword
        }
        try {
            await adminService.login(credentials)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <AuthContainer>
            <h1>Admin Sign Up</h1>
            <AuthForm onSubmit={handleSignup}> 
                <input type="email" placeholder="email" name="email" onChange = {handleSignupChange}></input>
                <input type="password" placeholder="password" name="password" onChange = {handleSignupChange}></input>
                <button type="submit" name="submit">Sign Up</button>
            </AuthForm>
            <h1>Admin Login</h1>
            <AuthForm onSubmit={handleLogin}> 
                <input type="email" placeholder="email" name="email" onChange = {handleLoginChange}></input>
                <input type="password" placeholder="password" name="password" onChange = {handleLoginChange}></input>
                <button type="submit" name="submit">Sign Up</button>
            </AuthForm>
        </AuthContainer>
    )
}


export default AdminAuth