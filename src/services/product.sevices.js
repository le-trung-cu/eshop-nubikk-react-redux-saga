const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Basic dHJ1bmdjdUBnbWFpbC5jb206MTIzNA=='
};


export const fetchMenProduct = () => {
    const url = `https://localhost:5001/api/men/products`;
    return fetch(url, {
        method: 'GET',
        headers
    }).then(data => data.json()).then(data => {
        data.forEach(element => {
            element.sizes = JSON.parse(element.sizes);
        });
        return data;
    })
};