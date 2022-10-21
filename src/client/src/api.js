export const API_URL = 'https://apimysqlspacenet.azurewebsites.net/api/';

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
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        }
    }
}