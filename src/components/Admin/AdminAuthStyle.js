import styled from 'styled-components'

export const AuthContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
    & > input {
        width: 15rem;
        padding: .5rem;
        font-size: 1.2rem;
        outline: none;
        border-radius: 5px;
        margin: .5rem 0;
    }
    & > button {
        padding: 1rem;
        border-radius: 5px;
        margin-top: .5rem;
    }
`