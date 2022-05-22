import { JSX } from "solid-js";
import { Plugin } from "../def"

interface PluginProps {
    children?: JSX.Element[] | JSX.Element;
    className?: string;
    plugin: Plugin;
}

export default ({ children, plugin }: PluginProps) => {
    return (
        <div class="border border-[1px] border-solid border-tertiary bg-card rounded-[5px] text-left mb-2 p-2 w-full">
            <h1 class="text-lg">{plugin.name}</h1>
            <p class={`text-sm mb-1 ${plugin.enabled ? "text-green" : "text-red"}`}>{plugin.enabled === true ? "Enabled" : "Disabled"}</p>
            <a href={plugin.url} class="transition-all text-xs text-muted underline underline-transparent truncate block hover:(underline-accent text-accent)">{plugin.url}</a>
        </div>
    );
};