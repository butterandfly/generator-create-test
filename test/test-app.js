'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('create-test:app', function () {
  describe('create normal test', function() {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .withArguments('normalTest')
        //.withOptions({ 'skip-install': true })
        .on('end', done);
    });

    it('creates test file', function () {
      assert.file([
        'normalTest.js'
      ]);
    });
  });

  describe('create test in path', function() {
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .withArguments('normalTest')
        .withOptions({ 'skip-install': true, 'path': 'createPath' })
        .on('end', done);
    });

    it('creates test file in specific path', function () {
      assert.file([
        'createPath/normalTest.js'
      ]);
    });
  });
});
