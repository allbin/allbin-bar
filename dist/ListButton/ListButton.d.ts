import React from 'react';
import { ButtonID } from '..';
declare global {
    interface Window {
        sso: any;
    }
}
declare type ColorKey = 'blue' | 'red';
interface ListButtonProps {
    id: ButtonID;
    onClick: (id: ButtonID) => void;
    onMouseEnter?: (id: ButtonID) => void;
    onMouseLeave?: (id: ButtonID) => void;
    color?: ColorKey;
}
declare type ListButtonComponent = React.FunctionComponent<ListButtonProps>;
declare const ListButton: ListButtonComponent;
export default ListButton;
