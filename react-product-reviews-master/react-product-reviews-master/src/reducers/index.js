import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import product from './product';
import products from './products';

const productReviewsApp = combineReducers({
    product,
    products,
    form: formReducer
});

export default productReviewsApp;
