const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    open: true,
    hot: true,
    port: 8080,
  },
  entry: { app: "./src/index.js" },
  output: {
    publicPath: "/js/",
    filename: "[name].js",
    library: ["com", "example"],
    libraryTarget: "umd",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  targets: "> 0.25%, not dead",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  devtool: "inline-source-map",
};
