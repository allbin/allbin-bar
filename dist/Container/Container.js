import React, { useState } from 'react';
import { AppBar, Card, createStyles, Drawer, Grid, IconButton, List, ListItem, makeStyles, Modal, Toolbar, Typography, } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import text from '../text';
import ListButton from '../ListButton';
import { About, Changelog, Contact, Help, } from '../ModalContent';
const width = '300px';
const useStyles = makeStyles((theme) => createStyles({
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
}));
const AllbinBarContainer = ({ changelog, current_version, dashboard_redirect_url, logout_redirect_url, onClose, onDashboard, onLogout, open, show_about_btn, show_contact_btn, show_credentials, show_dashboard_btn, show_help_btn, show_logout_btn, sso, title, tool_info, }) => {
    let [modal_state, setModalState] = useState('hidden');
    dashboard_redirect_url = dashboard_redirect_url || 'https://dashboard.allbin.se';
    logout_redirect_url = logout_redirect_url || 'https://login.allbin.se';
    show_about_btn = show_about_btn !== undefined ? show_about_btn : false;
    show_contact_btn = show_contact_btn !== undefined ? show_contact_btn : true;
    show_credentials = show_credentials !== undefined ? show_credentials : true;
    show_dashboard_btn = show_dashboard_btn !== undefined ? show_dashboard_btn : true;
    show_help_btn = show_help_btn !== undefined ? show_help_btn : false;
    show_logout_btn = show_logout_btn !== undefined ? show_logout_btn : true;
    const classes = useStyles();
    return (React.createElement("div", { className: classes.container },
        React.createElement(Drawer, { open: open, onClose: () => onClose(), className: classes.drawer },
            React.createElement(AppBar, { position: "static", className: classes.appBar, elevation: 0 },
                React.createElement(Toolbar, null,
                    React.createElement(IconButton, { className: classes.menuButton, color: "primary", "aria-label": "Menu", onClick: () => onClose() },
                        React.createElement(CloseIcon, null)),
                    React.createElement(Typography, { className: classes.title, variant: "h6" }, title))),
            React.createElement("div", { className: classes.list },
                React.createElement(List, null,
                    show_about_btn &&
                        (React.createElement(ListButton, { id: 'about', onClick: () => { setModalState("about"); } })),
                    (changelog || current_version) &&
                        (React.createElement(ListButton, { id: 'changelog', onClick: () => { setModalState("changelog"); } })),
                    show_contact_btn &&
                        (React.createElement(ListButton, { id: 'contact', onClick: () => { setModalState("contact"); } })),
                    show_help_btn &&
                        (React.createElement(ListButton, { id: 'help', onClick: () => { setModalState("help"); } }))),
                React.createElement("br", null),
                React.createElement(List, { className: classes.bottomList },
                    show_credentials && sso && sso.isLoggedIn() &&
                        (React.createElement(ListItem, { className: classes.credentials },
                            React.createElement("div", { style: { width: '100%' } },
                                React.createElement(Typography, { variant: "overline", align: "right", display: "block" }, text('logged_in_as')),
                                React.createElement(Typography, { align: "right", display: "block", paragraph: true }, sso.getJWT().getClaim('username'))))),
                    show_dashboard_btn &&
                        (React.createElement(ListButton, { id: "to_dashboard", color: "blue", onClick: () => onDashboard ? onDashboard(dashboard_redirect_url) : window.location.href = dashboard_redirect_url })),
                    show_logout_btn &&
                        (React.createElement(ListButton, { id: "logout", color: "red", onClick: () => onLogout ? onLogout(logout_redirect_url) : sso.logout(logout_redirect_url) }))))),
        React.createElement(Modal, { open: modal_state !== 'hidden', onClose: () => {
                setModalState('hidden');
            } },
            React.createElement(Grid, { container: true, spacing: 0, className: classes.modalContainer },
                React.createElement(Grid, { item: true, sm: 1, md: 1, lg: 2 }),
                React.createElement(Grid, { item: true, sm: 10, md: 10, lg: 8, style: { backgroundColor: 'transparent' } },
                    React.createElement(Card, { raised: true, style: {
                            backgroundColor: 'transparent',
                            borderRadius: 32,
                        } },
                        modal_state === "about" &&
                            (React.createElement(About, { onClose: () => { setModalState('hidden'); }, tool_title: title, tool_info: tool_info })),
                        modal_state === "changelog" &&
                            (React.createElement(Changelog, { current_version: current_version, onClose: () => { setModalState('hidden'); } })),
                        modal_state === "contact" &&
                            (React.createElement(Contact, { onClose: () => { setModalState('hidden'); } })),
                        modal_state === "help" &&
                            (React.createElement(Help, { onClose: () => { setModalState('hidden'); } })))),
                React.createElement(Grid, { item: true, sm: 1, md: 1, lg: 2 })))));
};
export default AllbinBarContainer;

//# sourceMappingURL=Container.js.map
