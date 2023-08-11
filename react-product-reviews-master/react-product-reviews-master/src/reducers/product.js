import { REQUEST_PRODUCT, RECEIVE_PRODUCT, REQUEST_ADD_PRODUCT_REVIEW, RECEIVE_ADD_PRODUCT_REVIEW } from '../actions/product';

const reviews = (state = [], action = {}) => {
    switch (action.type) {
        case RECEIVE_ADD_PRODUCT_REVIEW:
            return Object.assign({}, state, {
                productReviews: [action.productReview].concat(state.productReviews)
            });
        default:
            return state;
    }
};

const product = (state = [], action = {}) => {
    switch (action.type) {
        case REQUEST_PRODUCT:
            return Object.assign({}, state, {
                loading: true
            });
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, {
                data: action.product,
                loading: false
            });
        case REQUEST_ADD_PRODUCT_REVIEW:
            return Object.assign({}, state, {
                loading: true
            });
        case RECEIVE_ADD_PRODUCT_REVIEW:
            return Object.assign({}, state, {
                loading: false,
                data: reviews(state.data, action)
            });
        default:
            return state;
    }
};

export default product;
