const path = require('path');

module.exports = {
    entry: ["./client"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"],
                    plugins: ["transform-object-rest-spread"]
                },
            },
        ],
    },
    resolve: {
        modules: [
            "node_modules"
        ],
        extensions: [".js", ".json", ".css"],
    },
    target: "web",
    devtool: "source-map",
};
