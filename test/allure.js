var Jasmine2HtmlReporter = require('jasmine-allure-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeOnly: true,

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['login.js'],
  //allScriptsTimeout: 60000,
 
  jasmineNodeOpts: {
    showColors: true,
    //defaultTimeoutInterval: 30000
  },
  
  
  onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  }
  
  
};