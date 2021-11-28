const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
    entry: './src/index.js',
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: "svelte-loader",
                    options: {
                        // tureにすることで、
                        // svelteファイルの<style>タグをのcssを
                        // 「test: /\.css$/」のフローでコンパイルできる
                        emitCss: true,
                        compilerOptions:{
                            customElement: true
                        }
                        
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
        ]
    },
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: "main.js"
      },
    resolve: {
        extensions: [".mjs", ".js", ".svelte"],
    },
    plugins: [
        // 出力する際のファイル名を指定する
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new ModuleFederationPlugin({
            name: "hello_world",
            filename: "helloWorld.js",
            library: { type: "var", name: "hello_world" },
            exposes: {
              "./Hello": "./src/index.js",
            },
          }),
    ],
    devServer: {
    }
};