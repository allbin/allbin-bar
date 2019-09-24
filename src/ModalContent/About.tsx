import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
import makeStyles from './styles';
import { Info } from '@material-ui/icons';
import text from '../text';

interface Props {
    onClose: () => void;
    tool_info?: string[];
    tool_title: string;
}

const useStyles = makeStyles();

const About = ({ onClose, tool_info, tool_title }: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Info className={classes.icon} />
            <AppBar className={classes.appBar} position="static" elevation={0}>
                <Toolbar variant="dense" className={classes.toolBar}>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                        {text('about') + ' ' + tool_title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.body}>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <div className={`${classes.paper_body} --padding`}>
                            <Typography variant="h6" paragraph>
                                {text('company_info_1')}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                paragraph
                                className={classes.bread}
                            >
                                {text('company_info_2')}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                paragraph
                                className={classes.bread}
                            >
                                {text('company_info_3')}
                            </Typography>
                            {tool_info &&
                                tool_info.map((info, index) => (
                                    <Typography
                                        key={index}
                                        variant="subtitle2"
                                        className={classes.bread}
                                        paragraph
                                    >
                                        {info}
                                    </Typography>
                                ))}
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
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default About;
