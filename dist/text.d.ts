import { TypedDictionary } from '@allbin/output-helpers';
declare type Keys = 'allbin' | 'allbin_link_text' | 'about' | 'a_tool_by_allbin' | 'account_information' | 'change_password' | 'changed' | 'changelog_info' | 'changelog' | 'close' | 'company_info_1' | 'company_info_2' | 'company_info_3' | 'contact' | 'contact_text' | 'current_version' | 'email_us' | 'email' | 'first_name' | 'fixed' | 'help' | 'language' | 'last_name' | 'logged_in_as' | 'logout' | 'new' | 'reset_password_info' | 'sent' | 'to_dashboard' | 'updated' | 'username' | 'only_affects_this_tool';
export declare type Dictionary = {
    [key in Keys]: string;
};
declare const dictionary: TypedDictionary<Dictionary>;
declare const translate: (key: Keys, capitalize?: boolean) => any;
export { dictionary };
export default translate;
