var vue = require('vue-loader')
var webpack = require('webpack')
var imports = require('imports-loader')


module.exports = {
  entry: './src/main.js',
  output: {
    path: './static',
    publicPath: '/static/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /imagesloaded/,
        loader: 'imports?define=>false&this=>window'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    alias: {
      "eventEmitter/EventEmitter": "wolfy87-eventemitter",
      "get-style-property/get-style-property": "desandro-get-style-property",
      "matches-selector/matches-selector": "desandro-matches-selector/matches-selector"
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
