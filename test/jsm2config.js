var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  chromeOnly: true,

  capabilities: {
    'browserName': 'internet explorer'
  },

  specs: ['login.js'],
  //allScriptsTimeout: 60000,
 
  jasmineNodeOpts: {
    showColors: true,
    //defaultTimeoutInterval: 30000
  },
  
  
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: './test/reports/',
		  screenshotsFolder: 'images'
        })
      );
   }
  
  
  
};