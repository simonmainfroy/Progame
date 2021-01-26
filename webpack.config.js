const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {

  console.log("NODE_ENV:", env);

  return {

    entry: './src/js/index.js',
    devtool: 'eval-source-map',

//TEST WATCH
    watch: true,
    watchOptions: {
      aggregateTimeout: 600,
      poll: 1000,
      ignored: /node_modules/
    },
//TEST WATCH

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '',
    },

    module: {
      rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          },
        },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts',
          },
        },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader',
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        },
        ],
      },
      ],
    },
    plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new Dotenv(),
    ],


  };

};
