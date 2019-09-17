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
    ListItemText,
    makeStyles,
    Modal,
    Theme,
    Toolbar,
    Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import text from '../text';
import ListButton from '../ListButton';

// import {
//     SaveModalContent,
//     ShareModalContent,
//     ExportModalContent,
// } from './ModalContent';

declare global {
    interface Window {
        sso: any;
    }
}

interface AllbinBarProps {
    open: boolean;
    onClose: () => void;
    title: string;
    /** Displays a 'logout' button at the bottom. Defaults to true. */
    show_logout?: boolean;
    /** URL sent to SSO.logout command. Defaults to 'https://login.allbin.se/'. */
    logout_redirect_url?: string;
    /** Show what username was used to login. Defaults to true. */
    show_credentials?: boolean;

}

type AllbinBarContainerComponent = React.FunctionComponent<AllbinBarProps>;

const border_radius = 4;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {},
        drawer: {
            width: '600px',
            flexShrink: 0,
            '& .MuiBackdrop-root': {
                backgroundColor: 'rgba(9, 57, 128, 0.82)',
            },
            '& .MuiPaper-root': {
                backgroundColor: '#fff',
            },
        },
        background: {
            width: '600px',
            height: '510px',
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            pointerEvents: 'none',
        },
        appBar: { width: '600px' },
        title: { fontWeight: 'bold' },
        information: {
            height: '120px',
            backgroundColor: theme.palette.secondary.light,
            padding: '28px 16px',
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
        list: {
            width: '100%',
            padding: theme.spacing(1),
        },
        listItem: {
            borderRadius: border_radius,
            padding: theme.spacing(1, 2),
            '&:HOVER': {
                backgroundColor: theme.palette.primary.light,
                '& span': {
                    color: '#fff',
                },
                '& p': {
                    color: '#fff !important',
                },
            },
            '& span': {
                color: '#413D49',
                fontSize: 18,
            },
        },
        listItemNoHover: {
            borderRadius: border_radius,
            padding: theme.spacing(1, 2),
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
            borderRadius: '32px 32px 0 0',
            backgroundColor: '#413D49',
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            padding: theme.spacing(3, 3),
            zIndex: 2,
        },
        closeButton: {
            borderRadius: border_radius,
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(2),
            '& span': {
                color: '#fff',
                fontSize: 16,
                textAlign: 'center',
                display: 'block',
            },
        },
    }),
);


type ModalState = 'hidden' | 'save' | 'share' | 'export';

const AllbinBarContainer: AllbinBarContainerComponent = ({
    children,
    open,
    onClose,
    title,
    logout_redirect_url,
    show_logout,
    show_credentials
}) => {
    let [modal_state, setModalState] = useState<ModalState>('hidden');

    logout_redirect_url = logout_redirect_url || 'https://login.allbin.se';
    show_logout = show_logout !== undefined ? show_logout : true;
    show_credentials = show_credentials !== undefined ? show_credentials : true;

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
                            variant="h5"
                            color="primary"
                        >
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>

                <div className={classes.list}>
                    <List>
                        <ListButton
                            id={'changelog'}
                            onClick={() => { }}
                        />
                    </List>
                    <br />
                    <List className={classes.bottomList}>
                        {show_credentials && window.sso && window.sso.isLoggedIn() &&
                            (
                                <ListItem>
                                    <Typography>
                                        {}
                                    </Typography>
                                </ListItem>
                            )
                        }
                        <ListItem
                            className={classes.closeButton}
                            button
                            dense
                            onClick={() => {
                                if (window.sso) {
                                    window.sso.logout(logout_redirect_url);
                                }
                            }}
                        >
                            <ListItemText primary={text('log_out')} />
                        </ListItem>
                    </List>
                </div>
                <div className={classes.background} />
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
                            {children}
                        </Card>
                    </Grid>
                    <Grid item sm={1} md={1} lg={2} />
                </Grid>
            </Modal>
        </div>
    );
};

export default AllbinBarContainer;
