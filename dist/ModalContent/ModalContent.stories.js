import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, Grid, Card } from '@material-ui/core';
import { Changelog, Contact } from '.';
import { action } from '@storybook/addon-actions';
import About from './About';
const WrappedModalContent = ({ children }) => {
    return (React.createElement(Modal, { open: true },
        React.createElement(Grid, { container: true, spacing: 0 },
            React.createElement(Grid, { item: true, sm: 1, md: 1, lg: 2 }),
            React.createElement(Grid, { item: true, sm: 10, md: 10, lg: 8 },
                React.createElement(Card, { raised: true, style: {
                        backgroundColor: 'transparent',
                        borderRadius: 8,
                    } }, children)),
            React.createElement(Grid, { item: true, sm: 1, md: 1, lg: 2 }))));
};
storiesOf('ModalContent', module)
    .add('About', () => (React.createElement(WrappedModalContent, null,
    React.createElement(About, { onClose: action('changelog close'), tool_info: ["dummy tool info 1", "dummy tool info 2"], tool_title: "tool title" }))))
    .add('Changelog', () => (React.createElement(WrappedModalContent, null,
    React.createElement(Changelog, { onClose: action('changelog close'), current_version: "v1.0.1", changelog: "not_yet_implemented" }))))
    .add('Changelog Only CurrentVersion', () => (React.createElement(WrappedModalContent, null,
    React.createElement(Changelog, { onClose: action('changelog close'), current_version: "v1.0.1" }))))
    .add('Contact', () => (React.createElement(WrappedModalContent, null,
    React.createElement(Contact, { onClose: action('contact close') }))));

//# sourceMappingURL=ModalContent.stories.js.map
