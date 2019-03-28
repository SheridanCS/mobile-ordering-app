const headers = {
    'Accept': 'application/json',
    'Content-Type':'application/json'
};

export function Get(url) {
    console.log('GET', url);

    return fetch(url, {
        method: 'GET',
        headers: headers
    }).then((response) => {
        if (response.status === 200) {
            return response.json()
        }
    }).catch(error => {
        return error;
    });
}

export function Post(url, body) {
    console.log('POST', url);

    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    }).then((response) => {
        return response.json()
    }).catch(error => {
        return error
    });
}

export function Put(url, body) {
    console.log('PUT', url);

    return fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(body)
    }).then((response) => {
        return response.json()
    }).catch(error => {
        return error
    });
}

export function Delete(url) {
    console.log('DELETE', url);

    return fetch(url, {
        method: 'DELETE',
        headers: headers
    }).then((response) => {
        if (response.status === 200) {
            return response.json()
        }
    }).catch(error => {
        return error;
    });
}