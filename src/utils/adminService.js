import tokenService from './tokenService'

const BASE_URL = '/admin/'

function signup(user) {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Invalid Credentials')
    })
    .then(({token}) => {
        tokenService.setToken(token)
    })
}

function getAdmin() {
    return tokenService.getAdminFromToken()
}


export default { 
    signup,
    getAdmin
}