/// <reference types="react" />
interface Props {
    onClose: () => void;
    current_version?: string;
    changelog?: any;
}
declare const Changelog: ({ current_version, onClose, changelog }: Props) => JSX.Element;
export default Changelog;
