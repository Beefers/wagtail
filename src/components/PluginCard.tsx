import { JSX } from "solid-js";
import { Plugin } from "../def"

interface PluginProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    plugin: Plugin;
}

export default ({ children, plugin }: PluginProps) => {
    return (
        <div class="border border-[1px] border-solid border-tertiary rounded-[5px] mb-2 p-4">
            <h1 class="text-xl">{plugin.name}</h1>
        </div>
    );
};