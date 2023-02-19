import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    root: path.join(__dirname, "src"),
    build: {
        outDir: path.join(__dirname, "dist"),
        target: "es2015",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "src", "index.html"),
                about: path.resolve(__dirname, "src", "about.html"),
            },
        },
    },
    resolve: {
        alias: [
            {
                find: "@",
                replacement: path.join(__dirname, "src"),
            },
        ],
    },
});
