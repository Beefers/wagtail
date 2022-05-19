import { defineConfig } from "windicss/helpers";

export default defineConfig({
    theme: {
        extend: {
            transitionProperty: {
                "filter": "filter"
            },
        },
        fontFamily: {
            sans: ["Whitney"],
            header: ["Whitney"],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",

            // Dark mode
            "primary": "#36393f",
            "secondary": "#2f3136",
            "tertiary": "#202225",

            // Text
            "text": "#dcddde",
            "muted": "#a3a6aa",

            // Cards
            "card": "#20222599",

            "accent": "#5865f2",
        }
    },
})