import React from 'react';
import { LangId } from 'output-helpers';
interface AllbinBarProps {
    /** Enables changelog button and displays the changelog. */
    changelog?: any;
    /** Enables changelog button and displays current_version. */
    current_version?: string;
    /**
     * URL navigated to when 'to dashboard'-button is clicked, or provided to onDashboard callback is provided.
     * Defaults to 'https://dashboard.allbin.se'.
     */
    dashboard_redirect_url?: string;
    /**
     * Specify which language button should be shown as highlighted.
     * Must specify an onLanguage callback for this property to have any effect.
     */
    language?: LangId;
    /**
     * URL sent to SSO.logout command or onLogout callback if provided.
     * Defaults to 'https://login.allbin.se/'.
     */
    logout_redirect_url?: string;
    onClose: () => void;
    onDashboard?: (dashboard_url: string) => void;
    /**
     * This callback is called when the user clicks a language selection button.
     * Must specify a _language_ property for this callback to have any effect.
     */
    onLanguage?: (language: LangId) => void;
    onLogout?: (logout_url: string) => void;
    /** Shows AllbinBar. Defaults to false. */
    open: boolean;
    /** Displays and enables 'about'-button. Defaults to false. */
    show_about_btn?: boolean;
    /** Displays and enables 'contact'-button. Defaults to true. */
    show_contact_btn?: boolean;
    /** Show what username was used to login. Defaults to true. */
    show_credentials?: boolean;
    /** Dispalys and enables a 'to dashboard'-button Defaults to true. */
    show_dashboard_btn?: boolean;
    /** Displays and enables a 'help'-button. Defaults to false. */
    show_help_btn?: boolean;
    /** Displays and enables a 'logout'-button. Defaults to true. */
    show_logout_btn?: boolean;
    /** Reference to window.sso. */
    sso?: any;
    title: string;
    /** Each string will be a separate paragraph in the 'about'-text. */
    tool_info?: string[];
}
declare type AllbinBarContainerComponent = React.FunctionComponent<AllbinBarProps>;
declare const AllbinBarContainer: AllbinBarContainerComponent;
export default AllbinBarContainer;
