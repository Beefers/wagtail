import { RouteDefinition } from "solid-app-router";

export type BaseRoute = RouteDefinition & {
    name: string;
}

export interface Plugin {
    name: string;
    enabled: boolean;
    url: string;
    settings?: object;
}