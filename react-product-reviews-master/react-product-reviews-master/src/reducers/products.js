import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../actions/products';

const products = (state = [], action = {}) => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return Object.assign({}, state, {
                limit: action.limit,
                offset: action.offset,
                loading: true
            });
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, {
                data: action.products,
                loading: false
            });
        default:
            return state;
    }
};

export default products;
