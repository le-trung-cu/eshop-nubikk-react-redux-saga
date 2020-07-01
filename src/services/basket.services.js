const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Basic dHJ1bmdjdUBnbWFpbC5jb206MTIzNA=='
};
const uid = '8f8ec408-6bd7-48a1-826c-a373f479c4d9';
const basketId = 1;

export const addItemToBasketService = ({ productId, size, color, quantity = 1 }) => {
    const url = `https://localhost:5001/api/buyer/${uid}/basket`;
    // const url = 'https://localhost:5001/api/buyer/8f8ec408-6bd7-48a1-826c-a373f479c4d9/basket';

    const data = { productId, size, color, quantity }

    return fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    }).then(data => { console.log(data); return data.json() });
};

export const setQuantityToBasketItemService = ({ basketItemId, quantity }) => {
    const data = { basketItemId, quantity }
    const url = `https://localhost:5001/api/buyer/${uid}/basket/`;
    return fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data)
    })
}

export const clearBasketItemService = ({ basketItemId }) => {
    return setQuantityToBasketItemService({ basketItemId, quantity: 0 })
}


export const fetchCountService = () => {
    const url = `https://localhost:5001/api/buyer/${uid}/basket`;
    fetch(url, {
        method: 'GET',
        headers
    }).then(({ data }) => data.json()).then(s => console.log(s));
}

export const fetchBasketService = () => {
    const url = `https://localhost:5001/api/buyer/${uid}/basket`;
    return fetch(url, {
        method: 'GET',
        headers
    }).then(data => data.json());
};

export const getCountService = () => {
    const url = `https://localhost:5001/api/buyer/${uid}/basket/count`;
    return fetch(url, {
        method: 'GET',
        headers
    });
};
