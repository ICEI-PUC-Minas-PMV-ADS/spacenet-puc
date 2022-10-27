export const API_URL = 'https://apispacenet.azurewebsites.net/api/';

export const TOKEN_POST = (body) => {
    return {
        url: API_URL + '/User/Token',
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

export const USERS_GET = () => {
    return {
        url: API_URL + 'Person',
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    }
}

export const USER_GET = (id) => {
    return {
        url: API_URL + 'Person/' + id,
        options: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    }
}