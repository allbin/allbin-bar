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
import InfoIcon from '@material-ui/icons/Info';
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

type ColorKey = 'blue' | 'red';

interface ListButtonProps {
    id: ButtonID;
    onClick: (id: ButtonID) => void;
    onMouseEnter?: (id: ButtonID) => void;
    onMouseLeave?: (id: ButtonID) => void;
    color?: ColorKey;
}
interface StyleProps {
    color?: ColorKey;
}

type ListButtonComponent = React.FunctionComponent<ListButtonProps>;

const border_radius = 4;

const colors: {
    /** Returns [color, color] where the first is background and the second is text. */
    [key in ColorKey]: [string, string]
} = {
    blue: ['#3f51b5', '#fff'],
    red: ['#992132', '#fff'],
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {},
        listItem: {
            borderRadius: border_radius,
            padding: theme.spacing(1, 2),
            marginTop: (props: StyleProps) => props.color ? theme.spacing(1) : 0,
            backgroundColor: (props: StyleProps) => props.color ? colors[props.color][0] : undefined,
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
                color: (props: StyleProps) => props.color ? colors[props.color][1] : 'rgb(65, 61, 73)',
                fontSize: 14,
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
        case 'about':
            return <InfoIcon />;
        default:
            return <InboxIcon />;
    }
}

const ListButton: ListButtonComponent = ({
    id,
    onClick,
    onMouseEnter,
    onMouseLeave,
    color
}) => {
    const classes = useStyles({ color });

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
