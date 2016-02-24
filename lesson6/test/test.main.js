var main = require('../main');
var should = require('should');

describe('test/test.main.js', function() {
  it('it should equal 55 when n == 10', function() {
    main.fibonacci(10).should.equal(55);
  });

  it('should equal 0 when n == 0', function() {
    main.fibonacci(0).should.equal(0);
  });

  it('should only accept numbers', function() {
    (function() {
      main.fibonacci('test');
    }).should.throw('n should be a number');
  });

  it("n should less than or eaqual to 10", function() {
    (function() {
      main.fibonacci(11);
    }).should.throw('n should be no larger than 10');
  });

});
