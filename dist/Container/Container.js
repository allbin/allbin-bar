import React, { useState } from 'react';
import { AppBar, Card, createStyles, Drawer, Grid, IconButton, List, ListItem, Fade, makeStyles, Modal, Toolbar, Typography, } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import text from '../text';
import ListButton from '../ListButton';
import { About, Changelog, Contact, Help, } from '../ModalContent';
const width = 580;
const useStyles = makeStyles((theme) => createStyles({
    container: {},
    drawer: {
        width: width,
        flexShrink: 0,
        '& .MuiBackdrop-root': {},
        '& .MuiPaper-root': {
            background: 'linear-gradient(269.45deg, #2E71E5 0.62%, #265FC0 98.88%)',
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
}));
const AllbinBarContainer = ({ changelog, current_version, dashboard_redirect_url, logout_redirect_url, onClose, onDashboard, onLogout, open, show_about_btn, show_contact_btn, show_credentials, show_dashboard_btn, show_help_btn, show_logout_btn, sso, title, tool_info, }) => {
    let [modal_state, setModalState] = useState('hidden');
    let [selected_list_item, setSelectedListItem] = useState('');
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
        React.createElement(Drawer, { open: open, onClose: () => onClose(), className: classes.drawer },
            React.createElement(AppBar, { position: "static", className: classes.appBar, elevation: 0 },
                React.createElement(Toolbar, { className: classes.toolBar },
                    React.createElement(Typography, { className: classes.title, variant: "h6" }, title)),
                React.createElement(IconButton, { className: classes.menuButton, color: "primary", "aria-label": "Menu", onClick: () => onClose() },
                    React.createElement(CloseIcon, null))),
            React.createElement(List, { className: classes.list },
                show_about_btn && (React.createElement(ListButton, { active: selected_list_item === 'about', id: 'about', onClick: () => {
                        setSelectedListItem('about');
                        setModalState('about');
                    } })),
                (changelog || current_version) && (React.createElement(ListButton, { active: selected_list_item === 'changelog', id: 'changelog', onClick: () => {
                        setSelectedListItem('changelog');
                        setModalState('changelog');
                    } })),
                show_contact_btn && (React.createElement(ListButton, { active: selected_list_item === 'contact', id: 'contact', onClick: () => {
                        setSelectedListItem('contact');
                        setModalState('contact');
                    } })),
                show_help_btn && (React.createElement(ListButton, { active: selected_list_item === 'help', id: 'help', onClick: () => {
                        setSelectedListItem('help');
                        setModalState('help');
                    } }))),
            React.createElement("div", { className: classes.bottomList },
                React.createElement(Grid, { container: true },
                    React.createElement(Grid, { item: true, xs: 6 }, show_credentials && sso && sso.isLoggedIn() && (React.createElement(ListItem, { className: classes.credentials },
                        React.createElement("div", { style: { width: '100%' } },
                            React.createElement(Typography, { variant: "overline", display: "block" }, text('logged_in_as')),
                            React.createElement(Typography, { variant: "h5", display: "block" }, sso.getJWT().getClaim('username')))))),
                    React.createElement(Grid, { item: true, xs: 6, className: classes.userActions },
                        React.createElement(Grid, { container: true, direction: "column", justify: "flex-end", alignItems: "flex-end" },
                            show_dashboard_btn && (React.createElement(Grid, { item: true, xs: 12 },
                                React.createElement(Typography, { gutterBottom: true, className: classes.userAction, id: "to_dashboard", align: "right", onClick: () => onDashboard
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
                                    setSelectedListItem('');
                                    setModalState('hidden');
                                }, tool_title: title, tool_info: tool_info })),
                            modal_state === 'changelog' && (React.createElement(Changelog, { current_version: current_version, onClose: () => {
                                    setSelectedListItem('');
                                    setModalState('hidden');
                                } })),
                            modal_state === 'contact' && (React.createElement(Contact, { onClose: () => {
                                    setSelectedListItem('');
                                    setModalState('hidden');
                                } })),
                            modal_state === 'help' && (React.createElement(Help, { onClose: () => {
                                    setSelectedListItem('');
                                    setModalState('hidden');
                                } })))),
                    React.createElement(Grid, { item: true, sm: 1, md: 1, lg: 2 }))))));
};
export default AllbinBarContainer;

//# sourceMappingURL=Container.js.map
