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
    .then(data => data)
}

export default { 
    signup
}