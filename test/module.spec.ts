import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mocha';
import 'sinon';
import sinonChai from 'sinon-chai';

const expect = chai.expect;
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(sinonChai);

const foo = require('../src/module');

describe('foo', function t () {
  it('should be a function', function t () {
    expect(foo).to.be.a('function');
  });

  it('should return a number', function t () {
    expect(foo()).to.be.a('number');
  });
});
