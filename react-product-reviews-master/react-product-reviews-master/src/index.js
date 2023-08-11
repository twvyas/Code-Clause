import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ProductsPage from './pages/ProductsPage';
import ProductReviewsPage from './pages/ProductReviewsPage';
import AppContainer from './containers/AppContainer';
import store from './store/configureStore';
import { fetchProducts } from './actions/products';
import { fetchProduct } from './actions/product';

const loadProducts = store => store.dispatch(fetchProducts());
const loadProduct = (store, id) => store.dispatch(fetchProduct(id));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
                <IndexRoute component={ProductsPage} onEnter={loadProducts(store)} />
                <Route path="/:id/reviews" component={ProductReviewsPage} onEnter={({ params }) => {
                    loadProduct(store, params.id)
                }} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
