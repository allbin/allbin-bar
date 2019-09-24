import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Button,
    Link,
} from '@material-ui/core';

import makeStyles from './styles';
import { Call } from '@material-ui/icons';

import text from '../text';

interface Props {
    onClose: () => void;
}

const useStyles = makeStyles();

const Contact = ({ onClose }: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Call className={classes.icon} />
            <AppBar className={classes.appBar} position="static" elevation={0}>
                <Toolbar variant="dense" className={classes.toolBar}>
                    <Typography
                        variant="h4"
                        color="inherit"
                        style={{ fontWeight: 'bold' }}
                    >
                        {text('contact')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.body}>
                <Grid container>
                    <Grid item xs={12} sm={3}>
                        <div className={classes.guidePanelBody + ' --about'} />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <div className={`${classes.paper_body} --padding`}>
                            <Typography variant="h6">
                                {text('allbin')}
                            </Typography>
                            <Typography variant="body2" paragraph>
                                {text('contact_text')}
                            </Typography>
                            <Link
                                component="a"
                                href="https://www.allbinary.se"
                                variant="body2"
                            >
                                {text('allbin_link_text', false)}
                            </Link>
                            <div className={classes.button_bar}>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    size="large"
                                    className={classes.button}
                                    onClick={() => onClose()}
                                >
                                    {text('close')}
                                </Button>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    size="large"
                                    className={classes.button}
                                    href="mailto:info@allbinary.se"
                                >
                                    {text('email_us')}
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Contact;
