require('dotenv').load();
var net = require('net');
var assert = require('assert');

var target = {
  host: process.env.TARGET_MACHINE
}

describe('System', function() {
  it('Run Ubuntu 64 bit.', function(done) {
    done();
  });
});
