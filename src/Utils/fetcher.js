import _isEmpty from 'lodash/isEmpty';

// TODO: change queryString to object 
export const makeURL = (relativeURL, queryString) => {
    const URLPrefix = process.env.REACT_APP_API_URL;
console.log(URLPrefix)
    if (_isEmpty(queryString)) {
        return encodeURI(`${URLPrefix}${relativeURL}`)
    }
    return encodeURI(`${URLPrefix}${relativeURL}?${queryString}`);
};

export const get = (url, queryString) => {
    const options = {
        method: 'GET',
        mode: "cors",
        geaders: getHeaders(),
    };
    return fetch(url, options)
        .then(response => {console.log(response); return checkStatus(response)})
        .then(response => response.json())
        .catch(error => {
            console.log(error);
            return error;
        });
};

const getHeaders = () => {
    //TODO: add JWT to the headers
    return new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    });
};

const checkStatus = (response) => {
    if (response.ok) {
        return Promise.resolve(response);
    }

    // TODO: handle statuses 401, 403

    return response.json()
        .then(json => Promise.reject(json));
};