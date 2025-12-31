import { build } from "bun";

await build({
    entrypoints: ["./src/server.ts"],
    minify: true,
    bytecode: true,
    sourcemap: "linked",
    env: "NODE_EN*",
    compile: {
        outfile: "./dist/portfolio-api",
    },
});
