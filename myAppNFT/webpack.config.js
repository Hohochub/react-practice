const path = require('path');
const { SourceMapDevToolPlugin } = require("webpack");


module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
    },
    target: "web",
    devServer: {
        port: "8000",
        static: ["./public"],
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
              test: /\.mp4$/,
              use: 'file-loader?name=videos/[name].[ext]',
            },
            {
              test: /\.svg$/,
              use: [
                {
                  loader: 'svg-url-loader',
                  options: {
                    limit: 10000,
                  },
                },
              ],
            },
            {
              test: /\.svg$/i,
              issuer: /\.[jt]sx?$/,
              use: ['@svgr/webpack'],
            },
            {
              test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
              exclude: /images/,  /* dont want svg images from image folder to be included */
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    outputPath: 'fonts/',
                    name: '[name][hash].[ext]',
                  },
                },
              ],
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
            {
                test: /\.css$/i,
                oneOf: [
                  {
                    assert: { type: "css" },
                    loader: "css-loader",
                    options: {
                      exportType: "css-style-sheet",
                      sourceMap: true,
                    },
                  },
                  {
                    use: [
                      "style-loader",
                      {
                        loader: "css-loader",
                        options: {
                          // Other options
                        },
                      },
                    ],
                  },
                ],
              },
        ],
    },
    plugins: [
        new SourceMapDevToolPlugin({
          filename: "[file].map"
        }),
    ]
};





