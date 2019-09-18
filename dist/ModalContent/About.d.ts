/// <reference types="react" />
interface Props {
    onClose: () => void;
    tool_info?: string[];
    tool_title: string;
}
declare const About: ({ onClose, tool_info, tool_title }: Props) => JSX.Element;
export default About;
