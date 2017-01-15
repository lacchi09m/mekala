// An example configuration file
exports.config = {
  
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
  
  capabilities: {
    'browserName': 'chrome'
  },

  
  specs: ['gmail.js'],

  
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.	
  }
  file.require('jasmine-reporters');,
	jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('outputdir/', true, true));,

};