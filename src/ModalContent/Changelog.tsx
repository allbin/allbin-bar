import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
import makeStyles from './styles';

import text from '../text';

interface Props {
    onClose: () => void;
    current_version?: string;
    changelog?: any;
}

const useStyles = makeStyles();

const Changelog = ({ current_version, onClose, changelog }: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static" elevation={0}>
                <Toolbar variant="dense" className={classes.toolBar}>
                    <Typography variant="h5" color="inherit">
                        {text('changelog')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.body}>
                <Grid container>
                    <Grid item xs={12} sm={!changelog ? 12 : 4}>
                        <div className={classes.guidePanelBody}>
                            {current_version && (
                                <>
                                    <Typography variant="h6">
                                        {text('current_version')}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {current_version}
                                    </Typography>
                                </>
                            )}
                            {changelog && (
                                <Typography variant="body2" paragraph>
                                    {text('changelog_info')}
                                </Typography>
                            )}
                        </div>
                        {!changelog && (
                            <div className={classes.button_bar}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    className={classes.button}
                                    onClick={() => onClose()}
                                >
                                    {text('close')}
                                </Button>
                            </div>
                        )}
                    </Grid>
                    {changelog && (
                        <Grid item xs={12} sm={8}>
                            <div className={`${classes.paper_body} --padding`}>
                                <Typography variant="body2" paragraph>
                                    Changelog is currently not implemented!
                                </Typography>
                                <div className={classes.button_bar}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        className={classes.button}
                                        onClick={() => onClose()}
                                    >
                                        {text('close')}
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    );
};

export default Changelog;
