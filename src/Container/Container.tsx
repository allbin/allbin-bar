import React, { useState } from 'react';
import {
    AppBar,
    Card,
    createStyles,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    Fade,
    makeStyles,
    Modal,
    Theme,
    Toolbar,
    Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import text from '../text';
import ListButton from '../ListButton';

import {
    About,
    Changelog,
    Contact,
    Help,
    //     SaveModalContent,
    //     ShareModalContent,
    //     ExportModalContent,
} from '../ModalContent';

interface AllbinBarProps {
    /** Enables changelog button and displays the changelog. */
    changelog?: any;
    /** Enables changelog button and displays current_version. */
    current_version?: string;
    /**
     * URL navigated to when 'to dashboard'-button is clicked, or provided to onDashboard callback is provided.
     * Defaults to 'https://dashboard.allbin.se'.
     */
    dashboard_redirect_url?: string;
    /**
     * URL sent to SSO.logout command or onLogout callback if provided.
     * Defaults to 'https://login.allbin.se/'.
     */
    logout_redirect_url?: string;
    onDashboard?: (dashboard_url: string) => void;
    onClose: () => void;
    onLogout?: (logout_url: string) => void;
    /** Shows AllbinBar. Defaults to false. */
    open: boolean;
    /** Displays and enables 'about'-button. Defaults to false. */
    show_about_btn?: boolean;
    /** Displays and enables 'contact'-button. Defaults to true. */
    show_contact_btn?: boolean;
    /** Show what username was used to login. Defaults to true. */
    show_credentials?: boolean;
    /** Dispalys and enables a 'to dashboard'-button Defaults to true. */
    show_dashboard_btn?: boolean;
    /** Displays and enables a 'help'-button. Defaults to false. */
    show_help_btn?: boolean;
    /** Displays and enables a 'logout'-button. Defaults to true. */
    show_logout_btn?: boolean;
    /** Reference to window.sso. */
    sso: any;
    title: string;
    /** Each string will be a separate paragraph in the 'about'-text. */
    tool_info?: string[];
}

type AllbinBarContainerComponent = React.FunctionComponent<AllbinBarProps>;

const width = 580;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {},
        drawer: {
            width: width,
            flexShrink: 0,
            '& .MuiBackdrop-root': {},
            '& .MuiPaper-root': {
                background:
                    'linear-gradient(269.45deg, #2E71E5 0.62%, #265FC0 98.88%)',
            },
        },
        appBar: { width: width, padding: theme.spacing(3, 5) },
        toolBar: { padding: 0 },
        title: { fontWeight: 'bold', color: '#fff', fontSize: 42 },
        menuButton: {
            position: 'absolute',
            top: 20,
            right: 20,
            color: '#fff',
            width: 60,
            height: 60,
            '& svg': {
                width: 60,
                height: 60,
            },
        },
        list: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginTop: theme.spacing(20),
            [theme.breakpoints.down('lg')]: {
                marginTop: theme.spacing(10),
            },
        },
        userActions: {
            alignItems: 'center',
            display: 'flex',
        },
        userAction: {
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            '&:HOVER': {
                opacity: 0.8,
            },
        },
        fullList: {
            width: 'auto',
        },
        secondaryLabel: {
            color: '#413D49',
            marginTop: theme.spacing(0.5),
            opacity: 0.8,
        },
        modal: {
            pointerEvents: 'none',
        },
        modalContainer: {
            backgroundPosition: 'top right',
            position: 'relative',
            backgroundColor: '#fff',
            pointerEvents: 'all',
            paddingTop: 100,
            width: 'calc(100% - ' + width + 'px)',
            margin: '0 0 0 auto',
            overflow: 'auto',
            height: '100%',
            outline: 'none',
        },
        modalCard: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
        },
        bottomList: {
            backgroundColor: '#182B4F',
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            padding: theme.spacing(3, 4),
            zIndex: 2,
        },
        credentials: {
            color: 'white',
        },
        backdropRoot: {
            pointerEvents: 'none',
        },
    }),
);

type ModalState = 'hidden' | 'changelog' | 'contact' | 'about' | 'help';

const AllbinBarContainer: AllbinBarContainerComponent = ({
    changelog,
    current_version,
    dashboard_redirect_url,
    logout_redirect_url,
    onClose,
    onDashboard,
    onLogout,
    open,
    show_about_btn,
    show_contact_btn,
    show_credentials,
    show_dashboard_btn,
    show_help_btn,
    show_logout_btn,
    sso,
    title,
    tool_info,
}) => {
    let [modal_state, setModalState] = useState<ModalState>('hidden');

    dashboard_redirect_url =
        dashboard_redirect_url || 'https://dashboard.allbin.se';
    logout_redirect_url = logout_redirect_url || 'https://login.allbin.se';
    show_about_btn = show_about_btn !== undefined ? show_about_btn : false;
    show_contact_btn = show_contact_btn !== undefined ? show_contact_btn : true;
    show_credentials = show_credentials !== undefined ? show_credentials : true;
    show_dashboard_btn =
        show_dashboard_btn !== undefined ? show_dashboard_btn : true;
    show_help_btn = show_help_btn !== undefined ? show_help_btn : false;
    show_logout_btn = show_logout_btn !== undefined ? show_logout_btn : true;

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Drawer
                open={open}
                onClose={() => {
                    setModalState('hidden');
                    onClose();
                }}
                className={classes.drawer}
            >
                <AppBar
                    position="static"
                    className={classes.appBar}
                    elevation={0}
                >
                    <Toolbar className={classes.toolBar}>
                        <Typography className={classes.title} variant="h6">
                            {title}
                        </Typography>
                    </Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="primary"
                        aria-label="Menu"
                        onClick={() => {
                            setModalState('hidden');
                            onClose();
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </AppBar>

                <List className={classes.list}>
                    {show_about_btn && (
                        <ListButton
                            active={modal_state === 'about'}
                            id={'about'}
                            onClick={() => {
                                setModalState('about');
                            }}
                        />
                    )}
                    {(changelog || current_version) && (
                        <ListButton
                            active={modal_state === 'changelog'}
                            id={'changelog'}
                            onClick={() => {
                                setModalState('changelog');
                            }}
                        />
                    )}
                    {show_contact_btn && (
                        <ListButton
                            active={modal_state === 'contact'}
                            id={'contact'}
                            onClick={() => {
                                setModalState('contact');
                            }}
                        />
                    )}
                    {show_help_btn && (
                        <ListButton
                            active={modal_state === 'help'}
                            id={'help'}
                            onClick={() => {
                                setModalState('help');
                            }}
                        />
                    )}
                </List>
                <div className={classes.bottomList}>
                    <Grid container>
                        <Grid item xs={6}>
                            {show_credentials && sso && sso.isLoggedIn() && (
                                <ListItem className={classes.credentials}>
                                    <div style={{ width: '100%' }}>
                                        <Typography
                                            variant="overline"
                                            display="block"
                                        >
                                            {text('logged_in_as')}
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            display="block"
                                        >
                                            {sso.getJWT().getClaim('username')}
                                        </Typography>
                                    </div>
                                </ListItem>
                            )}
                        </Grid>
                        <Grid item xs={6} className={classes.userActions}>
                            <Grid
                                container
                                direction="column"
                                justify="flex-end"
                                alignItems="flex-end"
                            >
                                {show_dashboard_btn && (
                                    <Grid item xs={12}>
                                        <Typography
                                            gutterBottom
                                            className={classes.userAction}
                                            id="to_dashboard"
                                            align="right"
                                            onClick={() =>
                                                onDashboard
                                                    ? onDashboard(
                                                          dashboard_redirect_url!,
                                                      )
                                                    : (window.location.href = dashboard_redirect_url!)
                                            }
                                        >
                                            {text('to_dashboard')}
                                        </Typography>
                                    </Grid>
                                )}
                                {show_logout_btn && (
                                    <Grid item xs={12}>
                                        <Typography
                                            className={classes.userAction}
                                            id="logout"
                                            align="right"
                                            onClick={() =>
                                                onLogout
                                                    ? onLogout(
                                                          logout_redirect_url!,
                                                      )
                                                    : sso.logout(
                                                          logout_redirect_url,
                                                      )
                                            }
                                        >
                                            {text('logout')}
                                        </Typography>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Drawer>
            <Modal
                closeAfterTransition
                className={classes.modal}
                BackdropProps={{ classes: { root: classes.backdropRoot } }}
                hideBackdrop={true}
                open={modal_state !== 'hidden'}
                onClose={() => {
                    setModalState('hidden');
                }}
            >
                <Fade in={modal_state !== 'hidden'}>
                    <Grid
                        container
                        spacing={0}
                        className={classes.modalContainer}
                    >
                        <Grid item sm={1} md={1} lg={2} />
                        <Grid
                            item
                            sm={10}
                            md={10}
                            lg={8}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            <Card className={classes.modalCard}>
                                {modal_state === 'about' && (
                                    <About
                                        onClose={() => {
                                            setModalState('hidden');
                                        }}
                                        tool_title={title}
                                        tool_info={tool_info}
                                    />
                                )}
                                {modal_state === 'changelog' && (
                                    <Changelog
                                        current_version={current_version}
                                        onClose={() => {
                                            setModalState('hidden');
                                        }}
                                    />
                                )}
                                {modal_state === 'contact' && (
                                    <Contact
                                        onClose={() => {
                                            setModalState('hidden');
                                        }}
                                    />
                                )}
                                {modal_state === 'help' && (
                                    <Help
                                        onClose={() => {
                                            setModalState('hidden');
                                        }}
                                    />
                                )}
                            </Card>
                        </Grid>
                        <Grid item sm={1} md={1} lg={2} />
                    </Grid>
                </Fade>
            </Modal>
        </div>
    );
};

export default AllbinBarContainer;
