export const API_URL = 'https://apispacenet.azurewebsites.net/';

export const USER_POST = (body) => {
    return {
        url: API_URL + '',

        options: {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}