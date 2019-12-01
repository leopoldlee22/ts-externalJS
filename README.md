# ts-externalJS
typescript web project using externalJS written by ts also

### Background
- using typescript to build the whole front-end world
- collaboration between ts and js is the key to enable cross team working
- typescript3.0+ has 'reference' embed but not all can share source code to others

### Objective
- using typescript to build the library project and export as .js uglified. and .d.ts statement collection
- using typescript to build a web which refers to the above lib to enable cross team collaboration

### Deliverables and environment setup
1. mylib, the ts library project
```bash
# create dir
mkdir mylib
cd mylib

# init
npm init
npm install -g grunt-cli
npm install --save-dev typescript grunt grunt-ts grunt-contrib-uglify
tsc -init
touch Gruntfile.js
```
2. myweb, the express web project
```bash
# using express to create project with default jade engine but we will use static html in /public instead
express myweb
cd myweb
npm install -g webpack-cli
npm install --save-dev typescript typings @types/node webpack ts-loader tsconfig-paths-webpack-plugin uglifyjs-webpack-plugin
tsc -init
touch webpack.config.js
```

### key steps
#### mylib
1. create /src
2. create /src/kernel.ts to define base class and interface
3. create /src/context.ts to define child class to test import above export objects
4. create /src/index.ts to combine all modules as one export for easy-to-use in other project
5. using grunt-ts to compile and uglify the js to ./dist folder, please refer to the definition in Gruntfile.js

#### myweb
1. copy all files from above library's ./dist/* to local lib folder ./src/lib/externalJS
2. create main.ts in ./src, add reference statement at header and import sentences
3. using webpack to compile and export the .js to ./public/javascript directory as index.js
4. create demo.html in ./public and add script tag to request above's index.js
5. run `npm start` and visit localhost:3000/demo.html to check the result

### Tips
- One file is one module in ts, if files are well organized, no need to export module indeed
- directories and filenames are all keys to help webpack to resolve the reference. Please looking into the .d.ts to learn more details.
- .d.ts and .js are must-have lib resources to play as externalJS

### Final
For more info, please contact the auther, me, Leopold <leopoldlee22@163.com>
