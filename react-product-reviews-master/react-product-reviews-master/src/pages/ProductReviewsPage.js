import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Dimmer, Loader } from 'semantic-ui-react';
import ProductReviewsContainer from '../containers/ProductReviewsContainer';
import ProductInfo from '../components/ProductInfo';
import ProductReviewBreadCrumb from '../components/ProductReviewBreadcrumb';

const ProductReviewsPage = ({ loading }) => (
    <Grid>
        <Grid.Column width={6}>
            <ProductReviewBreadCrumb />
            <ProductInfo />
        </Grid.Column>

        <Grid.Column width={10}>
            <ProductReviewsContainer />
        </Grid.Column>

        <Dimmer active={loading}>
            <Loader />
        </Dimmer>
    </Grid>
);

ProductReviewsPage.propTypes = {
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        loading: state.product.loading
    };
};

export default connect(
    mapStateToProps
)(ProductReviewsPage);

