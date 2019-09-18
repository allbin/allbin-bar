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
    Changelog
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
    /** Displays and enables 'contact'-button. Defaults to true. */
    show_contact_btn?: boolean;
    /** Show what username was used to login. Defaults to true. */
    show_credentials?: boolean;
    /** Dispalys and enables a 'to dashboard'-button Defaults to true. */
    show_dashboard_btn?: boolean;
    /** Displays and enables a 'logout'-button. Defaults to true. */
    show_logout_btn?: boolean;
    /** Reference to window.sso. */
    sso: any;
    title: string;
}

type AllbinBarContainerComponent = React.FunctionComponent<AllbinBarProps>;

const width = '300px';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {},
        drawer: {
            width: width,
            flexShrink: 0,
            '& .MuiBackdrop-root': {
                backgroundColor: 'rgba(9, 57, 128, 0.82)',
            },
            '& .MuiPaper-root': {
                backgroundColor: '#fff',
            },
        },
        appBar: { width: width },
        title: { fontWeight: 'bold', color: '#3f51b5' },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
        list: {
            width: '100%',
        },
        fullList: {
            width: 'auto',
        },
        secondaryLabel: {
            color: '#413D49',
            marginTop: theme.spacing(0.5),
            opacity: 0.8,
        },
        modalContainer: {
            backgroundColor: 'transparent',
            marginTop: 60,
            outline: 'none',
        },
        bottomList: {
            borderRadius: '8px 8px 0 0',
            backgroundColor: '#413D49',
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            padding: theme.spacing(1, 2),
            zIndex: 2,
        },
        credentials: {
            color: 'white'
        }
    }),
);


type ModalState = 'hidden' | 'changelog' | 'contact';

const AllbinBarContainer: AllbinBarContainerComponent = ({
    changelog,
    current_version,
    dashboard_redirect_url,
    logout_redirect_url,
    onClose,
    onDashboard,
    onLogout,
    open,
    show_contact_btn,
    show_credentials,
    show_dashboard_btn,
    show_logout_btn,
    sso,
    title,
}) => {
    let [modal_state, setModalState] = useState<ModalState>('hidden');

    dashboard_redirect_url = dashboard_redirect_url || 'https://dashboard.allbin.se';
    logout_redirect_url = logout_redirect_url || 'https://login.allbin.se';
    show_contact_btn = show_contact_btn !== undefined ? show_contact_btn : true;
    show_dashboard_btn = show_dashboard_btn !== undefined ? show_dashboard_btn : true;
    show_credentials = show_credentials !== undefined ? show_credentials : true;
    show_logout_btn = show_logout_btn !== undefined ? show_logout_btn : true;

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Drawer
                open={open}
                onClose={() => onClose()}
                className={classes.drawer}
            >
                <AppBar
                    position="static"
                    className={classes.appBar}
                    elevation={0}
                >
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="primary"
                            aria-label="Menu"
                            onClick={() => onClose()}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                        >
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className={classes.list}>
                    <List>
                        {(changelog || current_version) &&
                            (
                                <ListButton
                                    id={'changelog'}
                                    onClick={() => { setModalState("changelog"); }}
                                />
                            )
                        }
                        {show_contact_btn &&
                            (
                                <ListButton
                                    id={'contact'}
                                    onClick={() => { setModalState("contact"); }}
                                />
                            )
                        }
                    </List>
                    <br />
                    <List className={classes.bottomList}>
                        {show_credentials && sso && sso.isLoggedIn() &&
                            (
                                <ListItem className={classes.credentials}>
                                    <div style={{ width: '100%' }}>
                                        <Typography variant="overline" align="right" display="block">
                                            {text('logged_in_as')}
                                        </Typography>
                                        <Typography align="right" display="block" paragraph={true}>
                                            {sso.getJWT().getClaim('username')}
                                        </Typography>
                                    </div>
                                </ListItem>
                            )
                        }
                        {show_dashboard_btn &&
                            (
                                <ListButton
                                    id="to_dashboard"
                                    color="blue"
                                    onClick={() => onDashboard ? onDashboard(dashboard_redirect_url!) : window.location.href = dashboard_redirect_url!}
                                />
                            )
                        }
                        {show_logout_btn &&
                            (
                                <ListButton
                                    id="logout"
                                    color="red"
                                    onClick={() => onLogout ? onLogout(logout_redirect_url!) : sso.logout(logout_redirect_url)}
                                />
                            )
                        }
                    </List>
                </div>
            </Drawer>
            <Modal
                open={modal_state !== 'hidden'}
                onClose={() => {
                    setModalState('hidden');
                }}
            >
                <Grid container spacing={0} className={classes.modalContainer}>
                    <Grid item sm={1} md={1} lg={2} />
                    <Grid
                        item
                        sm={10}
                        md={10}
                        lg={8}
                        style={{ backgroundColor: 'transparent' }}
                    >
                        <Card
                            raised
                            style={{
                                backgroundColor: 'transparent',
                                borderRadius: 32,
                            }}
                        >
                            {modal_state === "changelog" &&
                                (
                                    <Changelog
                                        current_version={current_version}
                                        onClose={() => { setModalState('hidden'); }}
                                    />
                                )
                            }
                        </Card>
                    </Grid>
                    <Grid item sm={1} md={1} lg={2} />
                </Grid>
            </Modal>
        </div>
    );
};

export default AllbinBarContainer;
