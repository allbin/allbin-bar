import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, Link, } from '@material-ui/core';
import makeStyles from './styles';
import { Call } from '@material-ui/icons';
import text from '../text';
const useStyles = makeStyles();
const Contact = ({ onClose }) => {
    const classes = useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement(Call, { className: classes.icon }),
        React.createElement(AppBar, { className: classes.appBar, position: "static", elevation: 0 },
            React.createElement(Toolbar, { variant: "dense", className: classes.toolBar },
                React.createElement(Typography, { variant: "h4", color: "inherit", style: { fontWeight: 'bold' } }, text('contact')))),
        React.createElement("div", { className: classes.body },
            React.createElement(Grid, { container: true },
                React.createElement(Grid, { item: true, xs: 12, sm: 3 },
                    React.createElement("div", { className: classes.guidePanelBody + ' --about' })),
                React.createElement(Grid, { item: true, xs: 12, sm: 9 },
                    React.createElement("div", { className: `${classes.paper_body} --padding` },
                        React.createElement(Typography, { variant: "h6" }, text('allbin')),
                        React.createElement(Typography, { variant: "body2", paragraph: true }, text('contact_text')),
                        React.createElement(Link, { component: "a", href: "https://www.allbinary.se", variant: "body2" }, text('allbin_link_text', false)),
                        React.createElement("div", { className: classes.button_bar },
                            React.createElement(Button, { color: "primary", variant: "contained", size: "large", className: classes.button, onClick: () => onClose() }, text('close')),
                            React.createElement(Button, { color: "primary", variant: "contained", size: "large", className: classes.button, href: "mailto:info@allbinary.se" }, text('email_us')))))))));
};
export default Contact;

//# sourceMappingURL=Contact.js.map
