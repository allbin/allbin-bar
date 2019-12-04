import React from 'react';
import { createStyles, ListItem, ListItemIcon, ListItemText, makeStyles, } from '@material-ui/core';
import { Info, Inbox, Help, Call, ChromeReaderMode } from '@material-ui/icons';
import text from '../text';
const useStyles = makeStyles((theme) => createStyles({
    container: {},
    listItem: {
        display: 'inline-flex',
        width: 'fit-content',
        borderRadius: 0,
        padding: theme.spacing(1, 2),
        flexDirection: 'row-reverse',
        marginBottom: theme.spacing(2),
        opacity: 0.6,
        backgroundColor: 'transparent',
        [theme.breakpoints.down('lg')]: {
            padding: theme.spacing(1, 1),
        },
        '& .border': {
            height: 4,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 0,
            opacity: 0.5,
            transition: 'all 0.3s',
            pointerEvents: 'none',
            [theme.breakpoints.down('lg')]: {
                height: 2,
            },
        },
        '&.active': {
            opacity: 1,
            '& .border': { width: '100%', opacity: 1 },
        },
        '&:HOVER': {
            backgroundColor: 'transparent',
            opacity: 1,
            '& .border': { width: '100px' },
        },
        '& span': {
            color: '#fff',
            marginRight: theme.spacing(4),
            fontSize: 30,
            fontWeight: 'bold',
            [theme.breakpoints.down('lg')]: {
                fontSize: 24,
            },
        },
    },
    icon: {
        color: '#fff',
        '& svg': {
            width: 28,
            height: 28,
            opacity: 0.5,
        },
    },
}));
function getIcon(name) {
    switch (name) {
        case 'help':
            return React.createElement(Help, null);
        case 'contact':
            return React.createElement(Call, null);
        case 'changelog':
            return React.createElement(ChromeReaderMode, null);
        case 'about':
            return React.createElement(Info, null);
        default:
            return React.createElement(Inbox, null);
    }
}
const ListButton = ({ id, onClick, onMouseEnter, onMouseLeave, active, }) => {
    const classes = useStyles();
    return (React.createElement(ListItem, { className: `${classes.listItem} ${active ? 'active' : ''}`, button: true, disableRipple: true, onClick: () => onClick(id), onMouseEnter: () => (onMouseEnter ? onMouseEnter(id) : undefined), onMouseLeave: () => (onMouseLeave ? onMouseLeave(id) : undefined) },
        React.createElement(ListItemIcon, { className: classes.icon }, getIcon(id)),
        React.createElement(ListItemText, { primary: text(id) }),
        React.createElement("div", { className: "border" })));
};
export default ListButton;

//# sourceMappingURL=ListButton.js.map
