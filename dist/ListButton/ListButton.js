import React from 'react';
import { createStyles, ListItem, ListItemIcon, ListItemText, makeStyles, } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ShareIcon from '@material-ui/icons/Share';
import SaveIcon from '@material-ui/icons/Save';
import ExportIcon from '@material-ui/icons/Print';
import InfoIcon from '@material-ui/icons/Info';
import PresentationIcon from '@material-ui/icons/Fullscreen';
import text from '../text';
const border_radius = 4;
const colors = {
    blue: ['#3f51b5', '#fff'],
    red: ['#992132', '#fff'],
};
const useStyles = makeStyles((theme) => createStyles({
    container: {},
    listItem: {
        borderRadius: border_radius,
        padding: theme.spacing(1, 2),
        marginTop: (props) => props.color ? theme.spacing(1) : 0,
        backgroundColor: (props) => props.color ? colors[props.color][0] : undefined,
        '&:HOVER': {
            backgroundColor: 'rgb(180,180,180)',
            '& span': {
                color: '#fff',
            },
            '& p': {
                color: '#fff !important',
            },
        },
        '& span': {
            color: (props) => props.color ? colors[props.color][1] : 'rgb(65, 61, 73)',
            fontSize: 14,
        },
    }
}));
function getIcon(name) {
    switch (name) {
        case 'help':
            return React.createElement(SaveIcon, null);
        case 'contact':
            return React.createElement(ShareIcon, null);
        case 'changelog':
            return React.createElement(ExportIcon, null);
        case 'to_dashboard':
            return React.createElement(PresentationIcon, null);
        case 'about':
            return React.createElement(InfoIcon, null);
        default:
            return React.createElement(InboxIcon, null);
    }
}
const ListButton = ({ id, onClick, onMouseEnter, onMouseLeave, color }) => {
    const classes = useStyles({ color });
    return (React.createElement(ListItem, { className: classes.listItem, button: true, dense: true, onClick: () => onClick(id), onMouseEnter: () => onMouseEnter ? onMouseEnter(id) : undefined, onMouseLeave: () => onMouseLeave ? onMouseLeave(id) : undefined },
        React.createElement(ListItemIcon, null, getIcon(id)),
        React.createElement(ListItemText, { primary: text(id) })));
};
export default ListButton;

//# sourceMappingURL=ListButton.js.map
