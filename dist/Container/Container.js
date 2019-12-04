import React, { useState } from 'react';
import { AppBar, Card, createStyles, Drawer, Grid, Button, List, ListItem, Fade, makeStyles, Modal, Toolbar, Typography, } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import text from '../text';
import ListButton from '../ListButton';
import { About, Changelog, Contact, Help, } from '../ModalContent';
import girlInModalImage from '../img/girl_modal.png';
const width = {
    small: 460,
    large: 580,
};
const useStyles = makeStyles((theme) => createStyles({
    container: {},
    drawer: {
        width: width.large,
        flexShrink: 0,
        '& .MuiBackdrop-root': {},
        '& .MuiPaper-root': {
            background: 'linear-gradient(269.45deg, #2E71E5 0.62%, #265FC0 98.88%)',
        },
        [theme.breakpoints.down('lg')]: {
            width: width.small,
        },
    },
    appBar: {
        width: width.large,
        padding: theme.spacing(3, 5),
        [theme.breakpoints.down('lg')]: {
            width: width.small,
        },
    },
    toolBar: { padding: 0 },
    title: { fontWeight: 'bold', color: '#fff', fontSize: 42 },
    menuButton: {
        position: 'absolute',
        right: -20,
        color: '#fff',
        opacity: 0.6,
        '&:HOVER': {
            opacity: 1,
        },
        '& svg': {
            fontSize: 52,
        },
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: theme.spacing(14),
        [theme.breakpoints.down('lg')]: {
            marginTop: theme.spacing(6),
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
    dashboardBtn: {
        backgroundColor: '#2d6bdb',
        borderRadius: 3,
        padding: '2px 12px',
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
        backgroundImage: 'url(' + girlInModalImage + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '44px 94%',
        position: 'relative',
        backgroundColor: '#fff',
        pointerEvents: 'all',
        paddingTop: 100,
        width: 'calc(100% - ' + width.large + 'px)',
        margin: '0 0 0 auto',
        overflow: 'auto',
        height: '100%',
        outline: 'none',
        [theme.breakpoints.down('lg')]: {
            paddingTop: 10,
            width: 'calc(100% - ' + width.small + 'px)',
        },
        [theme.breakpoints.down('md')]: {
            backgroundImage: 'none',
        },
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
        [theme.breakpoints.down('lg')]: {
            padding: theme.spacing(2, 3),
        },
    },
    credentials: {
        color: 'white',
    },
    backdropRoot: {
        pointerEvents: 'none',
    },
    signedInAs: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 12,
            lineHeight: '24px',
        },
    },
    username: {
        [theme.breakpoints.down('lg')]: {
            fontSize: 20,
        },
    },
}));
const AllbinBarContainer = ({ changelog, current_version, dashboard_redirect_url, logout_redirect_url, onClose, onDashboard, onLogout, open, show_about_btn, show_contact_btn, show_credentials, show_dashboard_btn, show_help_btn, show_logout_btn, sso, title, tool_info, }) => {
    let [modal_state, setModalState] = useState('hidden');
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
    return (React.createElement("div", { className: classes.container },
        React.createElement(Drawer, { open: open, onClose: () => {
                setModalState('hidden');
                onClose();
            }, className: classes.drawer },
            React.createElement(AppBar, { position: "static", className: classes.appBar, elevation: 0 },
                React.createElement(Toolbar, { className: classes.toolBar },
                    React.createElement(Typography, { className: classes.title, variant: "h6" }, title),
                    React.createElement(Button, { className: classes.menuButton, "aria-label": "Close", onClick: () => {
                            setModalState('hidden');
                            onClose();
                        } },
                        React.createElement(CloseIcon, null)))),
            React.createElement(List, { className: classes.list },
                show_about_btn && (React.createElement(ListButton, { active: modal_state === 'about', id: 'about', onClick: () => {
                        setModalState('about');
                    } })),
                (changelog || current_version) && (React.createElement(ListButton, { active: modal_state === 'changelog', id: 'changelog', onClick: () => {
                        setModalState('changelog');
                    } })),
                show_contact_btn && (React.createElement(ListButton, { active: modal_state === 'contact', id: 'contact', onClick: () => {
                        setModalState('contact');
                    } })),
                show_help_btn && (React.createElement(ListButton, { active: modal_state === 'help', id: 'help', onClick: () => {
                        setModalState('help');
                    } }))),
            React.createElement("div", { className: classes.bottomList },
                React.createElement(Grid, { container: true },
                    React.createElement(Grid, { item: true, xs: 6 }, show_credentials && sso && sso.isLoggedIn() && (React.createElement(ListItem, { className: classes.credentials },
                        React.createElement("div", { style: { width: '100%' } },
                            React.createElement(Typography, { variant: "overline", display: "block", className: classes.signedInAs }, text('logged_in_as')),
                            React.createElement(Typography, { variant: "h5", display: "block", className: classes.username }, sso.getJWT().getClaim('username')))))),
                    React.createElement(Grid, { item: true, xs: 6, className: classes.userActions },
                        React.createElement(Grid, { container: true, direction: "column", justify: "flex-end", alignItems: "flex-end" },
                            show_dashboard_btn && (React.createElement(Grid, { item: true, xs: 12 },
                                React.createElement(Typography, { gutterBottom: true, className: `${classes.userAction} ${classes.dashboardBtn}`, id: "to_dashboard", align: "right", onClick: () => onDashboard
                                        ? onDashboard(dashboard_redirect_url)
                                        : (window.location.href = dashboard_redirect_url) }, text('to_dashboard')))),
                            show_logout_btn && (React.createElement(Grid, { item: true, xs: 12 },
                                React.createElement(Typography, { className: classes.userAction, id: "logout", align: "right", onClick: () => onLogout
                                        ? onLogout(logout_redirect_url)
                                        : sso.logout(logout_redirect_url) }, text('logout'))))))))),
        React.createElement(Modal, { closeAfterTransition: true, className: classes.modal, BackdropProps: { classes: { root: classes.backdropRoot } }, hideBackdrop: true, open: modal_state !== 'hidden', onClose: () => {
                setModalState('hidden');
            } },
            React.createElement(Fade, { in: modal_state !== 'hidden' },
                React.createElement(Grid, { container: true, spacing: 0, className: classes.modalContainer },
                    React.createElement(Grid, { item: true, sm: 1, md: 1, lg: 2 }),
                    React.createElement(Grid, { item: true, sm: 10, md: 10, lg: 8, style: { backgroundColor: 'transparent' } },
                        React.createElement(Card, { className: classes.modalCard },
                            modal_state === 'about' && (React.createElement(About, { onClose: () => {
                                    setModalState('hidden');
                                }, tool_title: title, tool_info: tool_info })),
                            modal_state === 'changelog' && (React.createElement(Changelog, { current_version: current_version, onClose: () => {
                                    setModalState('hidden');
                                } })),
                            modal_state === 'contact' && (React.createElement(Contact, { onClose: () => {
                                    setModalState('hidden');
                                } })),
                            modal_state === 'help' && (React.createElement(Help, { onClose: () => {
                                    setModalState('hidden');
                                } })))),
                    React.createElement(Grid, { item: true, sm: 1, md: 1, lg: 2 }))))));
};
export default AllbinBarContainer;

//# sourceMappingURL=Container.js.map
