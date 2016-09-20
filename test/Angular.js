var HtmlReporter = require('protractor-angular-screenshot-reporter');
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
 // chromeOnly: true,

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['spec.js'],
  //allScriptsTimeout: 60000,
 
  jasmineNodeOpts: {
    showColors: true,
    //defaultTimeoutInterval: 30000
  },
  
  
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new HtmlReporter({
          baseDirectory: './test/reports/',
		  //screenshotsFolder: 'images'
        })
      );
   }
  
  
  
};