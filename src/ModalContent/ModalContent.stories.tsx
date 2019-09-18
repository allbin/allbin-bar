import React, { FunctionComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, Grid, Card } from '@material-ui/core';
import { Changelog, Contact } from './';
import { action } from '@storybook/addon-actions';

const WrappedModalContent: FunctionComponent = ({ children }) => {
    return (
        <Modal open={true}>
            <Grid container spacing={0}>
                <Grid item sm={1} md={1} lg={2} />
                <Grid item sm={10} md={10} lg={8}>
                    <Card
                        raised
                        style={{
                            backgroundColor: 'transparent',
                            borderRadius: 8,
                        }}
                    >
                        {children}
                    </Card>
                </Grid>
                <Grid item sm={1} md={1} lg={2} />
            </Grid>
        </Modal>
    );
};

storiesOf('ModalContent', module)
    .add('Changelog', () => (
        <WrappedModalContent>
            <Changelog
                onClose={action('changelog close')}
                current_version="v1.0.1"
                changelog={"not_yet_implemented"}
            />
        </WrappedModalContent>
    ))
    .add('Changelog Only CurrentVersion', () => (
        <WrappedModalContent>
            <Changelog
                onClose={action('changelog close')}
                current_version="v1.0.1"
            />
        </WrappedModalContent>
    ))
    .add('Contact', () => (
        <WrappedModalContent>
            <Contact
                onClose={action('contact close')}
            />
        </WrappedModalContent>
    ));
