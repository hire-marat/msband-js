import { Configuration, ProvidePlugin } from "webpack";

const config: Configuration = {
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        fallback: {
            module: "empty",
            dgram: "empty",
            dns: "mock",
            fs: "empty",
            http2: "empty",
            net: "empty",
            tls: "empty",
            child_process: "empty",
            process: require.resolve("process/browser"),
            stream: require.resolve("stream-browserify"),
            util: require.resolve("util"),
            buffer: require.resolve("buffer"),
            asset: require.resolve("assert")
        }
    },
    plugins: [
        new ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
            process: "process/browser",
        }),
    ],
    output: {
        filename: "bundle.js",
    },
};

export default config;