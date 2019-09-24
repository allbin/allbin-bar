import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
import makeStyles from './styles';
import { Help as HelpIcon } from '@material-ui/icons';
import text from '../text';
const useStyles = makeStyles();
const Help = ({ onClose }) => {
    const classes = useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement(HelpIcon, { className: classes.icon }),
        React.createElement(AppBar, { className: classes.appBar, position: "static", elevation: 0 },
            React.createElement(Toolbar, { variant: "dense", className: classes.toolBar },
                React.createElement(Typography, { variant: "h4", color: "inherit", style: { fontWeight: 'bold' } }, text('help')))),
        React.createElement("div", { className: classes.body },
            React.createElement(Grid, { container: true },
                React.createElement(Grid, { item: true, xs: 12, sm: 12 },
                    React.createElement("div", { className: `${classes.paper_body} --padding` },
                        React.createElement(Typography, { variant: "body2", paragraph: true }, "Not yet implemented."),
                        React.createElement("div", { className: classes.button_bar },
                            React.createElement(Button, { color: "primary", variant: "contained", size: "large", className: classes.button, onClick: () => onClose() }, text('close')))))))));
};
export default Help;

//# sourceMappingURL=Help.js.map
