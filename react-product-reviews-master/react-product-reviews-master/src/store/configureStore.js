import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {
    products: {
        data: [],
        limit: 10,
        offset: 0,
        loading: false
    },
    product: {
        data: {},
        loading: false
    }
};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

export default store;
