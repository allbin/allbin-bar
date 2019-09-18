import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './';
import { action } from '@storybook/addon-actions';

let sso = {
    getJWT: () => ({
        getClaim: (x: string) => "Dummy user",
    }),
    isLoggedIn: () => true,
    logout: action('logout')
};

storiesOf('AllbinBar', module)
    .add('Container', () => (
        <Container
            sso={sso}
            open={true}
            onClose={action("onClose")}
            title="AllbinBar dev tester"
            current_version="v1.0.1"
        />
    ));
