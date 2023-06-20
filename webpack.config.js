const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { 
        test: /\.(ts|tsx)$/, 
        exclude: /node_modules|\.d\.ts$/,
        loader: 'ts-loader'
      
      },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  resolve: {
    extensions: [".*", ".js", ".jsx", ".ts", ".tsx"],    
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  }
}