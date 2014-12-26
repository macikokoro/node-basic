#Basic node setup

Node has a requirement and module based dependency system.

To define this sort of connections Node uses require and module.
For example:

//app.js

`var export = require('./export');`

//export.js

`module.exports.sayHello = sayHello;`

To use this file make sure to have Node.js installed.

Clone this repo.

cd nodebasic

In the terminal run node app.js
