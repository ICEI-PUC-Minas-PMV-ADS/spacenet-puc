export const API_URL = 'https://apispacenet.azurewebsites.net/api/';

export const TOKEN_POST = (body) => {
    return {
        url: API_URL + 'User/Token',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}

export const USER_POST = (body) => {
    return {
        url: API_URL + 'Person',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}

export const USERS_GET = (token) => {
    return {
        url: API_URL + 'Person',
        options: {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        }
    }
}

export const USER_GET = (id, token) => {
    return {
        url: API_URL + 'Person/' + id,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        }
    }
}


export const SUPPORT_POST = (body, token) => {
    return {
        url: API_URL + 'Support',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(body)
        }
    }
}

export const SUPPORTS_GET = (token) => {
    return {
        url: API_URL + 'Support',
        options: {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        }
    }
}