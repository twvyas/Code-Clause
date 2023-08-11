import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comment, Header } from 'semantic-ui-react';
import AddProductReviewForm from '../components/AddProductReviewForm';
import ProductReview from '../components/ProductReview';
import { addProductReview } from '../actions/product';

class ProductReviewsView extends Component {
    render() {
        const { product: { data, loading }, onAddProductReview } = this.props;

        return (
            <Comment.Group>
                <Header as='h3' dividing>Reviews</Header>

                {!loading && data.productReviews.map(review => (
                    <ProductReview key={review.id} {...review} />
                ))}

                <AddProductReviewForm onAddProductReview={onAddProductReview} id={data.id} />
            </Comment.Group>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProductReview: (id, values) => {
            dispatch(addProductReview(1, values));
        }
    };
};

const ProductReviewsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductReviewsView);

export default ProductReviewsContainer;
