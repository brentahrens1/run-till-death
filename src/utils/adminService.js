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

function login(credentials) {
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(credentials)
    })
    .then(res => {
        if(res.ok) return res.json()
        throw new Error('Bad Credentials')
    })
    .then(({token}) => tokenService.setToken(token))
}

function logout() {
    tokenService.removeToken()
}


export default { 
    signup,
    getAdmin,
    logout
}