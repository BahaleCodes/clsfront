export class API {
    static loginUser(body) {
        return fetch( `https://clsbackend.herokuapp.com/auth/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then( resp => resp.json())
    }
    static registerUser(body) {
        return fetch( `https://clsbackend.herokuapp.com/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then( resp => resp.json())
    }
}

