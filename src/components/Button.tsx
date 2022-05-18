import { JSX } from "solid-js";

interface ButtonProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    onClick: () => void;
}

export default ({ children, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} class="w-auto bg-accent font-medium leading-tight my-2 py-2 px-4 rounded-[3px] items-center content-center">
            {children}
        </button>
    );
};