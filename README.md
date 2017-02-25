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

#add eslint
```
 npm install -g eslint
 eslint --init
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


#Move to github
1. Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or    
   gitignore files. You can add these files after your project has been pushed to GitHub.
   --  In .gitignore
         ``` .gitignore
             node_modules
        ```Will ignore node_modules and .gitignore itself--
 
2. Open terminal cd to local dir and ``` git init ```.

3. ``` git add --all``` 

4. ``` git commit -m "First commit" ```

5. ``` git remote add origin [remote repository URL] ```

6. ``` git remote -v ``` - Verifies the new remote URL

7. ``` git push origin master  ```

8. If mistakenly added gitignore after ```git --add```
  
    ``` git rm -r --cached node_modules ``` 
   ``` git commit -m "removing node_modules ```



