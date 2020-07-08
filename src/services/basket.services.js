import userServices from "./user.services";
import { toast } from "react-toastify";
const www = 'https://localhost:5001';
const getHeaders = () => ({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': userServices.authorization
});

export const addItemToBasketService = ({ productId, size, color, quantity = 1 }) => {
    const url = `${www}/api/buyer/${userServices.uid}/basket`;

    const data = { productId, size, color, quantity }

    return fetch(url, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
    }).then(data => {
        if (data.ok) {
            toast.success('product added to basket')
            return data.json();
        }
        toast.warning(`${data.status} error! product add to basket`);
    });
};

export const setQuantityToBasketItemService = ({ basketItemId, quantity }) => {
    const data = { basketItemId, quantity }
    const url = `${www}/api/buyer/${userServices.uid}/basket/`;
    return fetch(url, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data)
    })
}

export const clearBasketItemService = ({ basketItemId }) => {
    return setQuantityToBasketItemService({ basketItemId, quantity: 0 }).then(response => {
        if (response.ok) {
            toast.warning('cart item deleted');
        }
        return response;
    });
}


export const fetchCountService = () => {
    const url = `${www}/api/buyer/${userServices.uid}/basket`;
    fetch(url, {
        method: 'GET',
        headers: getHeaders(),
    }).then(({ data }) => data.json()).then(s => console.log(s));
}

export const fetchBasketService = () => {
    const url = `${www}/api/buyer/${userServices.uid}/basket`;
    return fetch(url, {
        method: 'GET',
        headers: getHeaders(),
    }).then(data => data.json());
};

export const getCountService = () => {
    const url = `/api/buyer/${userServices.uid}/basket/count`;
    return fetch(url, {
        method: 'GET',
        headers: getHeaders()
    });
};

export const createBasket = (cartItems) => {
    const url = `${www}/api/buyer/${userServices.uid}/basket/create`;

    const data = {
        items: cartItems.map(item => ({
            productId: item.productId,
            size: item.size,
            color: item.colorName,
            quantity: item.quantity
        }))
    }

    return fetch(url, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
    }).then(data => {
        if (data.ok) {
            toast.success('products added to basket')
            return data.json();
        }
    });
}