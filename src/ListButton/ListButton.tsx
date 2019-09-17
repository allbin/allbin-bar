import React from 'react';
import {
    createStyles,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Theme,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ShareIcon from '@material-ui/icons/Share';
import SaveIcon from '@material-ui/icons/Save';
import ExportIcon from '@material-ui/icons/Print';
import PresentationIcon from '@material-ui/icons/Fullscreen';
import text from '../text';
import { ButtonID } from '../';

// import {
//     SaveModalContent,
//     ShareModalContent,
//     ExportModalContent,
// } from './ModalContent';

declare global {
    interface Window {
        sso: any;
    }
}

interface ListButtonProps {
    id: ButtonID;
    onClick: (id: ButtonID) => void;
    onMouseEnter?: (id: ButtonID) => void;
    onMouseLeave?: (id: ButtonID) => void;
}

type ListButtonComponent = React.FunctionComponent<ListButtonProps>;

const border_radius = 4;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {},
        listItem: {
            borderRadius: border_radius,
            padding: theme.spacing(1, 2),
            '&:HOVER': {
                backgroundColor: theme.palette.primary.light,
                '& span': {
                    color: '#fff',
                },
                '& p': {
                    color: '#fff !important',
                },
            },
            '& span': {
                color: '#413D49',
                fontSize: 18,
            },
        }
    }),
);

function getIcon(name: ButtonID) {
    switch (name) {
        case 'help':
            return <SaveIcon />;
        case 'contact':
            return <ShareIcon />;
        case 'changelog':
            return <ExportIcon />;
        case 'to_dashboard':
            return <PresentationIcon />;
        default:
            return <InboxIcon />;
    }
}

const ListButton: ListButtonComponent = ({
    id,
    onClick,
    onMouseEnter,
    onMouseLeave
}) => {
    const classes = useStyles();

    return (

        <ListItem
            className={classes.listItem}
            button
            dense
            onClick={() => onClick(id)}
            onMouseEnter={() => onMouseEnter ? onMouseEnter(id) : undefined}
            onMouseLeave={() => onMouseLeave ? onMouseLeave(id) : undefined}
        >
            <ListItemIcon>{getIcon(id)}</ListItemIcon>
            <ListItemText
                primary={text(id)}
            />
        </ListItem>

    );
};

export default ListButton;
