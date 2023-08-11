import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Item, Dimmer, Loader } from 'semantic-ui-react';
import Product from '../components/Product';
import LoadMoreProducts from '../components/LoadMoreProducts';
import { fetchProducts } from '../actions/products';

const ProductsList = ({ products: { data, loading }, onLoadMore }) => (
    <Item.Group divided>
        <Dimmer active={loading}>
            <Loader />
        </Dimmer>

        {data.map(product => (
            <Product
                key={product.id}
                reviewsCount={product.productReviews.length}
                {...product}
            />
        ))}

        <LoadMoreProducts loading={loading} loadMoreProducts={onLoadMore} />
    </Item.Group>
);

ProductsList.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadMore: () => {
            dispatch(fetchProducts());
        }
    };
};

const ProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsList);

export default ProductsContainer;
