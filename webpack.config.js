const path = require("path")
const MyPlugin = require("./myplugin")

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [{
        test:/\.js$/,
        use:[path.resolve("./myloader.js")]
    }],
    rules: [{
        test:/\.css$/,
        use:["style-loader", "css-loader"]
    }],
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
    }],
}
}

