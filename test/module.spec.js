'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(sinonChai);
chai.use(chaiAsPromised);

const foo = require('../src/module');

describe('foo', function () {
  it('should be a function', function () {
    expect(foo).to.be.a('function');
  });

  it('should return a number', function () {
    expect(foo()).to.be.a('number');
  });
});
