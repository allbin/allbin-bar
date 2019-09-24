import React from "react";
import {
  createStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ShareIcon from "@material-ui/icons/Share";
import SaveIcon from "@material-ui/icons/Save";
import ExportIcon from "@material-ui/icons/Print";
import InfoIcon from "@material-ui/icons/Info";
import PresentationIcon from "@material-ui/icons/Fullscreen";
import text from "../text";
import { ButtonID } from "..";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    listItem: {
      borderRadius: 0,
      padding: theme.spacing(1, 2),
      flexDirection: "row-reverse",
      textAlign: "right",
      marginBottom: theme.spacing(3),
      backgroundColor: "transparent",
      "&:HOVER": {
        "& span": {
          color: "#fff"
        },
        "& p": {
          color: "#fff !important"
        }
      },
      "& span": {
        color: "#fff",
        marginRight: theme.spacing(4),
        fontSize: 42,
        fontWeight: "bold"
      }
    },
    icon: {
      color: "#fff",
      "& svg": {
        width: 34,
        height: 34,
        opacity: 0.5
      }
    }
  })
);

function getIcon(name: ButtonID) {
  switch (name) {
    case "help":
      return <SaveIcon />;
    case "contact":
      return <ShareIcon />;
    case "changelog":
      return <ExportIcon />;
    case "to_dashboard":
      return <PresentationIcon />;
    case "about":
      return <InfoIcon />;
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
      onClick={() => onClick(id)}
      onMouseEnter={() => (onMouseEnter ? onMouseEnter(id) : undefined)}
      onMouseLeave={() => (onMouseLeave ? onMouseLeave(id) : undefined)}
    >
      <ListItemIcon className={classes.icon}>{getIcon(id)}</ListItemIcon>
      <ListItemText primary={text(id)} />
    </ListItem>
  );
};

export default ListButton;
