export const REQUEST_PRODUCT = 'REQUEST_PRODUCT';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REQUEST_ADD_PRODUCT_REVIEW = 'ADD_PRODUCT_REVIEW';
export const RECEIVE_ADD_PRODUCT_REVIEW = 'RECEIVE_ADD_PRODUCT_REVIEW';

export const requestProduct = (id) => {
    return {
        type: REQUEST_PRODUCT,
        id
    };
};

export const receiveProduct = ({ product }) => {
    return {
        type: RECEIVE_PRODUCT,
        product
    };
};

export const requestAddProductReview = (id) => {
    return {
        type: REQUEST_ADD_PRODUCT_REVIEW,
        id
    };
};

export const receiveAddProductReview = ( productReview ) => {
    return {
        type: RECEIVE_ADD_PRODUCT_REVIEW,
        productReview
    }
};

export const fetchProduct = (id) => {
    return dispatch => {
        dispatch(requestProduct(id));

        // Simulate slow api loading and enjoy loader!
        setTimeout(() => {
            return fetch(`/api/products/${id}`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(json => dispatch(receiveProduct(json)));
        }, 100);
    }
};

export const addProductReview = (id, values) => {
    return dispatch => {
        dispatch(requestAddProductReview(id));

        setTimeout(() => {
            dispatch(receiveAddProductReview({
                "id": Math.floor(Math.random() * (10000 - 2)) + 2,
                "content": values.comment,
                "productId": id
            }));
        }, 200);
        // return fetch(`/api/products/${id}/reviews`, {
        //     method: 'POST',
        //     body: JSON.stringify(values)
        // })
        //     .then(response => response.json())
        //     .then(json => dispatch(receiveAddProductReview(json)));
    }
};
