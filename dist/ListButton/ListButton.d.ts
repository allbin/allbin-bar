import React from 'react';
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
declare type ListButtonComponent = React.FunctionComponent<ListButtonProps>;
declare const ListButton: ListButtonComponent;
export default ListButton;
