import React, { Component, PropTypes } from 'react';
import { Button, Icon, Item, Label } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

class Product extends Component {
    handleClick = () => {
        browserHistory.push('/' + this.props.id + '/reviews');
    };

    render() {
        const { name, shortDescription, fullDescription, imageSrc, reviewsCount } = this.props;

        return (
            <Item>
                <Item.Image size='tiny' src={imageSrc} />
                <Item.Content>
                    <Item.Header as='a'>{name}</Item.Header>
                    <Item.Meta>{shortDescription}</Item.Meta>
                    <Item.Description>{fullDescription}</Item.Description>
                    <Item.Extra>
                        <Button primary floated='right' onClick={this.handleClick}>
                            View Reviews
                            <Icon name='right chevron' />
                        </Button>
                        <Label>{reviewsCount} reviews</Label>
                    </Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    reviewsCount: PropTypes.number.isRequired
};

export default Product;
