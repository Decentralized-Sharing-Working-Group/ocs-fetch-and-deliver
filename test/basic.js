var assert = require('chai').assert,
    request = require('supertest'),
    SharingProxy = require("../src/proxy").Proxy;

describe('proxy class', function() {
  var proxy = new SharingProxy();
  it('should have a run method', function(done) {
    assert.typeOf(proxy.run, 'function');
    done();
  });
});
