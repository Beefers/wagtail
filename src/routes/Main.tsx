import { createSignal, Accessor, Setter, createEffect } from "solid-js";


import { BaseRoute, Plugin } from "../def";
import { openFile } from "../lib/util";

import Button from "../components/Button";
import PluginCard from "../components/PluginCard";

export default {
    name: "Home",
    path: "/",
    component: () => {
        const [backup, setBackup]: [Accessor<Plugin[]>, Setter<Plugin[]>] = createSignal([]);

        return (
            <div class="flex flex-col justify-center items-center text-center h-full">
                <h1 class="text-4xl mb-2">Wagtail</h1>
                <h2 class="text-1xl">A viewer for MigrationStation backups.</h2>

                <Button onClick={async () => { setBackup(await openFile()); }}>Upload backup</Button>

                <div class="flex flex-col overflow-scroll">
                    {backup().length !== 0 ? JSON.parse(backup().toString()).map((plugin: Plugin) => function() {
                        return (
                            <PluginCard plugin={plugin}/>
                        )
                    }) : null}
                </div>
            </div>
        );
    },
} as BaseRoute;