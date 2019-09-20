import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
import makeStyles from './styles';

import text from '../text';

interface Props {
    onClose: () => void;
}

const useStyles = makeStyles();

const Help = ({ onClose }: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static" elevation={0}>
                <Toolbar variant="dense" className={classes.toolBar}>
                    <Typography variant="h5" color="inherit">
                        {text('help')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.body}>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <div className={`${classes.paper_body} --padding`}>
                            <Typography variant="body2" paragraph>
                                {/* //TODO: implement help */}
                                Not yet implemented.
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
                </Grid>
            </div>
        </div>
    );
};

export default Help;
