import React from "react";
import {
  createStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme
} from "@material-ui/core";
import { Info, Inbox, Help, Call, ChromeReaderMode } from "@material-ui/icons";
import text from "../text";
import { ButtonID } from "..";

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
      return <Help />;
    case "contact":
      return <Call />;
    case "changelog":
      return <ChromeReaderMode />;
    case "about":
      return <Info />;
    default:
      return <Inbox />;
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
