import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

const AppHeader = () => (
    <div>
        <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>
                Product Reviews App
            </Header.Content>
        </Header>
        <hr />
        <br />
    </div>
);

export default AppHeader;
