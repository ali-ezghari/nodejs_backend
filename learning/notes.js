// ?Common package.json Fields
// Basic Metadata
// {
//   "name": "my-package",
//   "version": "1.0.0",
//   "description": "A brief description of your package",
//   "main": "index.js",
//   "type": "module", // or "commonjs"
//   "keywords": ["example", "package", "node"],
//   "author": "Your Name ",
//   "license": "MIT",
//   "homepage": "https://example.com/my-package"
// } com>

// ?Define custom scripts that can be run with npm run <script-name>:

// "scripts": {
//   "start": "node index.js",
//   "dev": "nodemon index.js",
//   "test": "jest",
//   "build": "webpack --mode production",
//   "lint": "eslint .",
//   "prepare": "husky install"
// }

// ? Version Ranges
// ^4.17.21 - Compatible with 4.x.x (up to but not including 5.0.0)
// ~4.17.21 - Patch updates only (4.17.x)
// 4.17.21 - Exact version
// latest - Latest stable version
// git+https://... - Git repository

// "dependencies": {
//   "express": "^4.18.2",
//   "mongoose": "~7.0.0",
//   "lodash": "4.17.21"
// },

// ? Specify Node.js and npm version requirements:

// "engines": {
//   "node": ">=14.0.0 <17.0.0",
//   "npm": ">=6.0.0"
// }
