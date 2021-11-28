const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const PORT = 3000; // ヘッダーアプリケーションとは port 番号を変更する必要がある

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  devServer: {
    port: PORT,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
        name: "main_contents",
        filename: "helloWorld.js",
        remotes: {
          helloWorld_app: "hello_world@http://localhost:8081/helloWorld.js",
        }
      }),
  ],
};