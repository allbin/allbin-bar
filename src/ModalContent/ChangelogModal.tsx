import React from 'react';
import {AppBar, Toolbar, Typography, Grid, Button, List, ListItem, ListItemText} from '@material-ui/core';
import makeStyles from './styles';
import oh from 'output-helpers';
import { ChromeReaderMode } from '@material-ui/icons';

import text from '../text';

interface Props {
    onClose: () => void;
    current_version?: string;
    changelog?: Changelog;
}

const useStyles = makeStyles();

const ChangelogModal = ({ current_version, onClose, changelog }: Props) => {
    const classes = useStyles();
    const lang = oh.getLang();
    return (
        <div className={classes.root}>
            <ChromeReaderMode className={classes.icon} />
            <AppBar className={classes.appBar} position="static" elevation={0}>
                <Toolbar variant="dense" className={classes.toolBar}>
                    <Typography
                        className={classes.title}
                        variant="h4"
                        color="inherit"
                        style={{ fontWeight: 'bold' }}
                    >
                        {text('changelog')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.body}>
                <Grid container>
                    <Grid item xs={12} sm={12}>
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
                                    color="primary"
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
                        <Grid item xs={12} sm={12}>
                            <div className={`${classes.paper_body} --padding`}>
                                <List>
                                    {changelog.map(log_entry =>
                                        <ListItem key={log_entry.title[lang]}><ListItemText primary={log_entry.title[lang]} secondary={<React.Fragment><ul>{log_entry.changes && log_entry.changes.map(change => <li><Typography key={change[lang]}>{change[lang]}</Typography></li> )}</ul></React.Fragment>}/></ListItem>
                                    )}
                                </List>
                            </div>
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
                        </Grid>
                    )}
                </Grid>
            </div>
        </div>
    );
};

export default ChangelogModal;


