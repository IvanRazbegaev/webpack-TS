const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const devMode = !env.production;
    return {
        mode: devMode ? "development" : "production",
        entry: './src/app/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "app.js",
            clean: true,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test:/\.tsx?$/,
                    loader: 'ts-loader',
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: devMode
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                implementation: require('sass'),
                                sourceMap: devMode
                            }
                        }
                    ]
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin(),
        ],
        devServer: {
            // contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000,
            hot: true
        }
    }
};