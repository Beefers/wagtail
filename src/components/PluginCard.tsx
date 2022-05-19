import { JSX } from "solid-js";
import { Plugin } from "../def"

interface PluginProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    plugin: Plugin;
}

export default ({ children, plugin }: PluginProps) => {
    return (
        <div class="border border-[1px] border-solid border-tertiary bg-card rounded-[5px] text-left mb-2 p-2">
            <h1 class="text-lg mr-2">{plugin.name}</h1>
            <p class="text-sm">{plugin.enabled === true ? "Enabled" : "Disabled"}</p>
            <p class="text-muted">{plugin.url}</p>
        </div>
    );
};