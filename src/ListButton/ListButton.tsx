import React from 'react';
import {
    createStyles,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Theme,
} from '@material-ui/core';
import { Info, Inbox, Help, Call, ChromeReaderMode } from '@material-ui/icons';
import text from '../text';
import { ButtonID } from '..';

declare global {
    interface Window {
        sso: any;
    }
}

interface ListButtonProps {
    id: ButtonID;
    active?: boolean;
    onClick: (id: ButtonID) => void;
    onMouseEnter?: (id: ButtonID) => void;
    onMouseLeave?: (id: ButtonID) => void;
}
type ListButtonComponent = React.FunctionComponent<ListButtonProps>;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
            '& .border': {
                height: 5,
                backgroundColor: '#fff',
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: 0,
                opacity: 0.5,
                transition: 'all 0.3s',
                pointerEvents: 'none',
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
                fontSize: 36,
                fontWeight: 'bold',
            },
        },
        icon: {
            color: '#fff',
            '& svg': {
                width: 34,
                height: 34,
                opacity: 0.5,
            },
        },
    }),
);

function getIcon(name: ButtonID) {
    switch (name) {
        case 'help':
            return <Help />;
        case 'contact':
            return <Call />;
        case 'changelog':
            return <ChromeReaderMode />;
        case 'about':
            return <Info />;
        default:
            return <Inbox />;
    }
}

const ListButton: ListButtonComponent = ({
    id,
    onClick,
    onMouseEnter,
    onMouseLeave,
    active,
}) => {
    const classes = useStyles();

    return (
        <ListItem
            className={`${classes.listItem} ${active ? 'active' : ''}`}
            button
            disableRipple
            onClick={() => onClick(id)}
            onMouseEnter={() => (onMouseEnter ? onMouseEnter(id) : undefined)}
            onMouseLeave={() => (onMouseLeave ? onMouseLeave(id) : undefined)}
        >
            <ListItemIcon className={classes.icon}>{getIcon(id)}</ListItemIcon>
            <ListItemText primary={text(id)} />
            <div className="border" />
        </ListItem>
    );
};

export default ListButton;
