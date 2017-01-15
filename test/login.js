describe('TCT Home Page', function() {
 
                var loginNameInputElm =element(by.id('username'));
                var passwordInputElm =element(by.id('password'));
                var loginBtnElm =element(by.id('submitFrm'));
               
                it('non-angular page so ignore sync and active wait to load', function() {
    browser.driver.ignoreSynchronization = true;
    browser.get('https://google.co.in');
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
});
 