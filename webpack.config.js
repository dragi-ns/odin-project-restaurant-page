const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: 'development', // production
  entry: {
    main: './src/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].[contenthash].js',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: {
      app: {
        name: 'firefox-developer-edition',
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]'
        }
      },
      {
        test: /\.svg/i,
        use: ['svg-inline-loader']
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
          options: {
            encodeOptions: {
              mozjpeg: {
                quality: 60
              }
            }
          }
        }
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
      ignoreOrder: false
    })
  ]
};
