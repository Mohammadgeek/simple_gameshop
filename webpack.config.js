
const webpack = require('webpack');

const { dirname } = require('path');
const path = require('path');
const { rule } = require('postcss');
const { Template } = require('webpack');
const { type } = require('os');


module.exports ={
    mode  : 'development', //production
    watch: true,
    entry :{
       main : path.resolve(__dirname,'src/logic.js'),
    },
    output : {
       path : path.resolve(__dirname,'dist/'),
       filename : '[contenthash].logic.js',
       //assetModuleFilename: 'images/[hash][ext]',
       clean: true
    },

   experiments: {
       asset: true
   },
   
    module :{
      // import css or scss

        rules : [
        
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            
          },

          // import images 
            //{test: /\.(png|gif|jpg|jpeg|svg)$/, type:'asset/resource'}, 


          // import fonts
         {
          test: /\.(woff|woff2|ttf|eot)$/,
          use: [
            'file-loader'
           ]
            }
        ]
      },
     

    watchOptions: {
      poll: 2000, // Check for changes every second
      ignored: /node_modules/,
    },
}