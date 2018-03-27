module.exports = {
  entry:"./src/index.js",
  output:{
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      { test: /\.js$/, loader: 'babel-loader'} // take care the non-standar js
    ]
  }
}