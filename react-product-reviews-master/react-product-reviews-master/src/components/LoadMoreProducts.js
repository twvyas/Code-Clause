import React, { Component, PropTypes } from 'react';
import { Container, Button } from 'semantic-ui-react';

class LoadMoreProducts extends Component {
    handleClick = (e) => {
        e.preventDefault();

        const { loading, loadMoreProducts } = this.props;

        if (!loading) {
            window.scrollTo(0, 0);
            loadMoreProducts();
        }
    };

    render() {
        const { loading } = this.props;

        return (
            <Container textAlign='center'>
                <Button basic={loading} loading={loading} onClick={this.handleClick}>
                    Load more
                </Button>
            </Container>
        )
    }
}

LoadMoreProducts.propTypes = {
    loading: PropTypes.bool.isRequired,
    loadMoreProducts: PropTypes.func.isRequired
};

export default LoadMoreProducts;
