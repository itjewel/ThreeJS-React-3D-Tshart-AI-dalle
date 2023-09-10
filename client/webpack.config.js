// webpack.config.js
module.exports = {
    // ...
    entry: {
      "app": "src/app.js"
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: "[name].js",
      sourceMapFilename: "[name].js.map"
    },
    devtool: "source-map"
    // ...
};