export function Get(url, headers) {
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

export function Post(url, headers, body) {
    console.log('POST', url);
    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
    }).then((response) => {
        return response.json()
    }).catch(error => ({error}));
}

export function Put(url, headers, body) {
    console.log('PUT', url);

    return fetch(url, {
        method: 'PUT',
        headers: headers,
        body: body
    }).then((response) => {
        return response.json()
    }).catch(error => {
        return error
    });
}

export function Delete(url, headers) {
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