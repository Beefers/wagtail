/* @refresh reload */
import { render } from "solid-js/web";
import { Router, useRoutes } from "solid-app-router";
import "virtual:windi.css";
import "virtual:windi-devtools";

import routesArray from "./routes";

function App() {
    const Routes = useRoutes(routesArray);


    return (
        <div class="w-screen h-screen flex flex-row font-medium bg-primary text-text">
            <div class="p-2 w-full h-full overflow-y-auto">
                <Routes/>
            </div>
        </div>
    );
};

render(() => <Router><App/></Router>, document.getElementById("root") as HTMLElement);