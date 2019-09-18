import React from 'react';
import { storiesOf } from '@storybook/react';
import ListButton from '.';
import { action } from '@storybook/addon-actions';
import { List } from '@material-ui/core';
const WrapperList = ({ children }) => {
    return (React.createElement("div", { style: {
            width: '300px',
            height: '100%',
            backgroundColor: 'rgb(230,230,230)',
            position: 'absolute',
            top: 0,
            left: 0
        } },
        React.createElement("p", { style: { fontSize: '12px' } }, "The grey background is only to represent the parent size and not part of the ListButton."),
        React.createElement(List, null, children)));
};
storiesOf('ListButton', module)
    .add('All ButtonIDs', () => (React.createElement(WrapperList, null,
    React.createElement(ListButton, { id: "about", onClick: action('onClick about') }),
    React.createElement(ListButton, { id: "contact", onClick: action('onClick contact') }),
    React.createElement(ListButton, { id: "help", onClick: action('onClick help') }),
    React.createElement(ListButton, { id: "changelog", onClick: action('onClick changelog') }),
    React.createElement(ListButton, { id: "to_dashboard", onClick: action('onClick to_dashboard'), color: "blue" }),
    React.createElement(ListButton, { id: "logout", onClick: action('onClick logout'), color: "red" }))));

//# sourceMappingURL=ListButton.stories.js.map
