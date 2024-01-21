path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/index.ts"),
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: [
          { loader: "ts-loader" },
          // {
          //   loader: "babel-loader",
          //   options: {
          //     presets: ["@babel/preset-env", "@babel/preset-typescript"],
          //   },
          // },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist", "bundle"),
  },
};
