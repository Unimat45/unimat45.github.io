import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    output: "export",
    images: {
        unoptimized: true,
        loader: "custom",
        loaderFile: "./img-loader.ts",
    },
};

export default nextConfig;
