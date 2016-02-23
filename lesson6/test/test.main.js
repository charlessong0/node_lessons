var main = require('../main');
var should = require('should');

describe('test/test.main.js', function() {
  it('it should equal 55 when n == 10', function() {
    main.fibonacci(10).should.equal(55);
  });
});
