function setToken(token) {
    if(token) {
        sessionStorage.setItem('token', token)
    } else {
        sessionStorage.removeItem('token')
    }
}

function getToken(){
    let token = sessionStorage.getItem('token')
    if(token) {
        const payload = JSON.parse(atob(token.split('.')[1]))
        if(payload.exp < Date.now() / 1000) {
            sessionStorage.removeItem('token')
            token = null
        }
    }
    return token
}

function getAdminFromToken() {
    const token = getToken()
    return token ? JSON.parse(atob(token.split('.')[1])).admin : null
}

export default {
    setToken,
    getToken,
    getAdminFromToken
}