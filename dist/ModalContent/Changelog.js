import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
import makeStyles from './styles';
import { ChromeReaderMode } from '@material-ui/icons';
import text from '../text';
const useStyles = makeStyles();
const Changelog = ({ current_version, onClose, changelog }) => {
    const classes = useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement(ChromeReaderMode, { className: classes.icon }),
        React.createElement(AppBar, { className: classes.appBar, position: "static", elevation: 0 },
            React.createElement(Toolbar, { variant: "dense", className: classes.toolBar },
                React.createElement(Typography, { variant: "h4", color: "inherit", style: { fontWeight: 'bold' } }, text('changelog')))),
        React.createElement("div", { className: classes.body },
            React.createElement(Grid, { container: true },
                React.createElement(Grid, { item: true, xs: 12, sm: !changelog ? 12 : 4 },
                    React.createElement("div", { className: classes.guidePanelBody },
                        current_version && (React.createElement(React.Fragment, null,
                            React.createElement(Typography, { variant: "h6" }, text('current_version')),
                            React.createElement(Typography, { variant: "body2", paragraph: true }, current_version))),
                        changelog && (React.createElement(Typography, { variant: "body2", paragraph: true }, text('changelog_info')))),
                    !changelog && (React.createElement("div", { className: classes.button_bar },
                        React.createElement(Button, { color: "primary", variant: "contained", size: "large", className: classes.button, onClick: () => onClose() }, text('close'))))),
                changelog && (React.createElement(Grid, { item: true, xs: 12, sm: 8 },
                    React.createElement("div", { className: `${classes.paper_body} --padding` },
                        React.createElement(Typography, { variant: "body2", paragraph: true }, "Changelog is currently not implemented!"),
                        React.createElement("div", { className: classes.button_bar },
                            React.createElement(Button, { color: "primary", variant: "contained", size: "large", className: classes.button, onClick: () => onClose() }, text('close'))))))))));
};
export default Changelog;

//# sourceMappingURL=Changelog.js.map
