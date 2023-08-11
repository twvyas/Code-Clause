import React, { Component, PropTypes } from 'react';
import { Comment } from 'semantic-ui-react';

class ProductReview extends Component {
    render() {
        const { content } = this.props;

        return (
            <Comment>
                <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
                <Comment.Content>
                    <Comment.Author as='a'>Matt</Comment.Author>
                    <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>{content}</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Upvote</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        );
    }
}

ProductReview.propTypes = {
    content: PropTypes.string.isRequired
};

export default ProductReview;
