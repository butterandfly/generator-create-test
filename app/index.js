'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.argument('testName', {type: String, required: false});
    this.option('path', {type: String, defaults: './'});
    this.option('protractor', {type: Boolean, defaults: false});
    this.option('protractorConfig', {type: Boolean, defaults: false});
  },

  prompting: function () {
    //var done = this.async();

    //this.log(yosay(
    //  '欢迎使用' + chalk.red('create-test') + '！'
    //));
    this.log('欢迎使用' + chalk.red('create-test') + '！');

    //var prompts = [{
    //  type: 'confirm',
    //  name: 'someOption',
    //  message: 'Would you like to enable this option?',
    //  default: true
    //}];
    //
    //this.prompt(prompts, function (props) {
    //  this.someOption = props.someOption;
    //
    //  done();
    //}.bind(this));
  },

  writing: function() {
    var testName = this.testName;
    var testFilePath = path.join(this.options.path, testName + '.js');

    var tplFile = '_chaiTest.js';
    if (this.options.protractor) {
      tplFile = '_protractorTest.js'
    }
    if (this.options.protractorConfig) {
      tplFile = '_protractorConf.js';
    }

    this.fs.copy(
      this.templatePath(tplFile),
      this.destinationPath(testFilePath)
    )
  }
});
