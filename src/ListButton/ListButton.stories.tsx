import React, { FunctionComponent } from 'react';
import { storiesOf } from '@storybook/react';
import ListButton from '.';
import { action } from '@storybook/addon-actions';
import { List } from '@material-ui/core';

const WrapperList: FunctionComponent<{}> = ({
    children
}) => {
    return (
        <div
            style={{
                width: '300px',
                height: '100%',
                backgroundColor: 'rgb(230,230,230)',
                position: 'absolute',
                top: 0,
                left: 0
            }}
        >
            <p style={{ fontSize: '12px' }}>The grey background is only to represent the parent size and not part of the ListButton.</p>
            <List>
                {children}
            </List>
        </div>
    );
};

storiesOf('ListButton', module)
    .add('All ButtonIDs', () => (
        <WrapperList>
            <ListButton
                id={"about"}
                onClick={action('onClick about')}
            />
            <ListButton
                id={"contact"}
                onClick={action('onClick contact')}
            />
            <ListButton
                id={"help"}
                onClick={action('onClick help')}
            />
            <ListButton
                id={"changelog"}
                onClick={action('onClick changelog')}
            />
            <ListButton
                id={"to_dashboard"}
                onClick={action('onClick to_dashboard')}
                color="blue"
            />
            <ListButton
                id={"logout"}
                onClick={action('onClick logout')}
                color="red"
            />
        </WrapperList>
    ));
