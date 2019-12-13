import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '.';
import { action } from '@storybook/addon-actions';

let sso = {
    getJWT: () => ({
        getClaim: (x: string) => 'Dummy user',
    }),
    isLoggedIn: () => true,
    logout: action('logout'),
};

const bgDiv = {
    position: 'absolute' as any,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F1F4FF',
};

storiesOf('AllbinBar', module)
    .add('Container', () => (
        <div style={bgDiv}>
            <Container
                sso={sso}
                open={true}
                onClose={action('onClose')}
                onDashboard={action('onDashboard')}
                onLanguage={action('onLanguage')}
                language={'sv-SE'}
                title="IWA"
                current_version="v1.0.1"
                show_about_btn={true}
                show_help_btn={true}
                tool_info={[
                    'dummy tool information 1',
                    'dummy tool information 2',
                ]}
            />
        </div>
    ))
    .add('Container no logout', () => (
        <div style={bgDiv}>
            <Container
                sso={sso}
                open={true}
                onClose={action('onClose')}
                onDashboard={action('onDashboard')}
                title="IWA"
                current_version="v1.0.1"
                show_about_btn={true}
                show_help_btn={true}
                show_logout_btn={false}
                tool_info={[
                    'dummy tool information 1',
                    'dummy tool information 2',
                ]}
            />
        </div>
    ))
    .add('Container minimal', () => (
        <div style={bgDiv}>
            <Container
                open={true}
                onClose={action('onClose')}
                onDashboard={action('onDashboard')}
                title="No SSO Test"
                current_version="v1.0.1"
                show_about_btn={false}
                show_help_btn={false}
                show_logout_btn={false}
                show_dashboard_btn={false}
                tool_info={[
                    'dummy tool information 1',
                    'dummy tool information 2',
                ]}
            />
        </div>
    ));
