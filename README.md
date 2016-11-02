#Setup
```
npm init

npm install --save react
npm install --save react-dom

npm install --save-dev webpack
npm install webpack-dev-server

npm install --save-dev babel-loader 
npm install --save-dev babel-core
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-react
```
/*webpack config*/
#webpack.config.js
```
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: { path: 'build', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
```

/*Run webpack*/
#server mode
```
webpack-dev-server --progress --colors
```
#build/normal mode
```
webpack --progress --colors
```
#Note
always declare static to exported functions
