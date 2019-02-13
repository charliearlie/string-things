const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  output: {
    library: "string-things",
    libraryTarget: "umd",
    filename: "main.js"
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
