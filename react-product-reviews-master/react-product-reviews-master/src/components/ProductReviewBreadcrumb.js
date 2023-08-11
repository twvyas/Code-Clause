import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { Link } from 'react-router';

const ProductReviewBreadcrumb = () => (
    <Breadcrumb>
        <Breadcrumb.Section>
            <Link to='/'>Home</Link>
        </Breadcrumb.Section>
        <Breadcrumb.Divider icon='right angle' />
        <Breadcrumb.Section active={true}>
            Reviews
        </Breadcrumb.Section>
    </Breadcrumb>
);

export default ProductReviewBreadcrumb;
