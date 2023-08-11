import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import AppHeader from '../components/AppHeader';

class AppContainer extends Component {
    render() {
        return (
            <Container>
                <AppHeader />
                {this.props.children}
            </Container>
        );
    }
}

export default AppContainer;
