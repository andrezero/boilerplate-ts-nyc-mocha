const bar = require('./module-dep');

const arr: number[] = [];

function foo (): number {
  arr.push(Math.random());
  return arr.reduce((acc: number, num: number) => acc + bar(num), 0);
}

export = foo;
