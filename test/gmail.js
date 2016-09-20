var protractor = require('protractor');
require('..node_modules/protractor/node_modules/jasminewd2');
var config = require('../settings.js').getConfig();


describe('TCT Home Page', function() {

	it('should login', function() {
    var ptor = protractor.getInstance();
    var driver = ptor.driver;

    var findByName = function(name) {
      return driver.findElement(protractor.By.id(id));
    };

	driver.get('https://stg.tct.itc.ge.com');
	
	findByName('Email').sendKeys(config.user);
	findByName('next').click();
    findByName('Passwd').sendKeys(config.password);
		});

	

});