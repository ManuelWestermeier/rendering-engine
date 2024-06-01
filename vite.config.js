import { defineConfig } from "vite";

const config = defineConfig({
    base: "rendering-engine",
    build: { outDir: "docs" }
})

export default config