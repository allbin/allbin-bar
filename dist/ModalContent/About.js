import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
import makeStyles from './styles';
import { Info } from '@material-ui/icons';
import text from '../text';
const useStyles = makeStyles();
const About = ({ onClose, tool_info, tool_title }) => {
    const classes = useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement(Info, { className: classes.icon }),
        React.createElement(AppBar, { className: classes.appBar, position: "static", elevation: 0 },
            React.createElement(Toolbar, { variant: "dense", className: classes.toolBar },
                React.createElement(Typography, { variant: "h4", style: { fontWeight: 'bold' } }, text('about') + ' ' + tool_title))),
        React.createElement("div", { className: classes.body },
            React.createElement(Grid, { container: true },
                React.createElement(Grid, { item: true, xs: 12, sm: 12 },
                    React.createElement("div", { className: `${classes.paper_body} --padding` },
                        React.createElement(Typography, { variant: "h6", paragraph: true }, text('company_info_1')),
                        React.createElement(Typography, { variant: "subtitle2", paragraph: true, className: classes.bread }, text('company_info_2')),
                        React.createElement(Typography, { variant: "subtitle2", paragraph: true, className: classes.bread }, text('company_info_3')),
                        tool_info &&
                            tool_info.map((info, index) => (React.createElement(Typography, { key: index, variant: "subtitle2", className: classes.bread, paragraph: true }, info))),
                        React.createElement("div", { className: classes.button_bar },
                            React.createElement(Button, { color: "primary", variant: "contained", size: "large", className: classes.button, onClick: () => onClose() }, text('close')))))))));
};
export default About;

//# sourceMappingURL=About.js.map
