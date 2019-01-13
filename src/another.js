'use strict';

const bar2 = require('./another-dep');

const arr = [];

function foo () {
  arr.push(Math.random());
  return arr.reduce((acc, num) => acc + bar2(num), 0);
}

module.exports = foo;
