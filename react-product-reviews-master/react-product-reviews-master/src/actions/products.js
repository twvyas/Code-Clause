export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const requestProducts = (limit, offset) => {
    return {
        type: REQUEST_PRODUCTS,
        limit,
        offset
    };
};

export const receiveProducts = ({ products }) => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    };
};

export const fetchProducts = (limit = 10, offset = 0) => {
    return dispatch => {
        dispatch(requestProducts(limit, offset));

        // Simulate slow api loading and enjoy loader!
        setTimeout(() => {
            return fetch(`/api/products`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(json => dispatch(receiveProducts(json)));
        }, 100);
    }
};
