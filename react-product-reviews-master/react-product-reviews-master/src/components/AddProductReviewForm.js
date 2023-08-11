import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';

const required = value => value ? undefined : 'Required';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className={touched && error ? 'field error' : 'field'}>
        <label>{label}</label>
        <textarea {...input} />
    </div>
);

class AddProductReviewForm extends Component {
    submit = (values) => {
        const { valid, onAddProductReview, id, reset } = this.props;

        if (valid) {
            onAddProductReview(id, values);
            reset();
        }
    };

    render() {
        const { valid, handleSubmit } = this.props;

        return (
            <Form reply onSubmit={handleSubmit(this.submit)}>
                <Field
                    name="comment"
                    component={renderField}
                    type="textarea"
                    validate={[ required ]}
                    label="Your comment"
                />
                <Button content='Add Reply' labelPosition='left' icon='edit' primary disabled={!valid} />
            </Form>
        );
    }
}

AddProductReviewForm = reduxForm({
    form: 'addProductReview'
})(AddProductReviewForm);

export default AddProductReviewForm;
