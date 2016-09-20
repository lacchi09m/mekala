var HtmlReporter = require('protractor-html-screenshot-reporter');
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
  
  
  onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screnshots`: 
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: '/tmp/screenshots'
      }));
   }
  
  
  
};