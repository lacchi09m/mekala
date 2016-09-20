var testData = require('./json.json');
describe('TCT Home Page', function() {
  
  it('Should be able to successfully login', function() {
    // Load the ITC TCT homepage.

       browser.driver.ignoreSynchronization = true;
    
	
    browser.get('https://supportcentral.ge.com/');
	browser.driver.ignoreSynchronization = true;
    
	browser.driver.findElement(by.id('username')).sendKeys('999999100');
	browser.driver.findElement(by.id('password')).sendKeys('test123test');
	browser.driver.findElement(by.id('submitFrm')).click();
		
		/*browser.driver.findElement(by.xpath('//input[@id='username']')).sendKeys('999999100');
		browser.driver.findElement(by.xpath('//input[@id='password']')).sendKeys('test123test');
		browser.driver.findElement(by.xpath('//input[@id='submitFrm']')).click();*/
	//element.find(By.id('example'));
/*	element(by.id('username')).sendKeys('999999100');
	element(by.id('password')).sendKeys('test123test');
	element(by.id('submitFrm')).click();
*/
	});
});