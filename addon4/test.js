// test.js

const addon = require('bindings')('addon.node');

const fn = addon();

console.log(fn());