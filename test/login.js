describe('test123', function() {
 
              /*  var loginNameInputElm =element(by.id('username'));
                var passwordInputElm =element(by.id('password'));
                var loginBtnElm =element(by.id('submitFrm'));*/
             
/*beforeEach(function() {
        browser.driver.ignoreSynchronization = true;
    });
		
afterEach(function() {
        browser.driver.ignoreSynchronization = false;
    });*/
		
                it('FUNCTION1', function() {
   // browser.driver.ignoreSynchronization = true;
    browser.get('https://angularjs.org');
	 element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();
	//browser.driver.quit();
               /* expect(loginNameInputElm.waitReady()).toBeTruthy();
    expect(passwordInputElm.waitReady()).toBeTruthy();
                });
               
                it('should fill user and password and logins', function() {
    loginNameInputElm.sendKeys(process.env.999999100);
    passwordInputElm.sendKeys(process.env.test123test);
    loginBtnElm.click();
                });          
 
                it('restores ignore sync when switching back to angular pages', function() {
    browser.ignoreSynchronization = false; // restore
    browser.get('https://stg.tct.itc.ge.com');*/
                });          
				
				it('FUNCTION2', function() {
    //browser.get('https://angularjs.org');

   

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});
 