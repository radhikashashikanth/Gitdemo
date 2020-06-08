describe('login page', function() {
    
    it('should render login page', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://devlocations.cc-racks.com/glm/qa/#/login?returnUrl=%2Flist');
        element(by.css("input[formControlName=username]")).sendKeys("radhika.shashikanth@cc-racks.com");
        element(by.css("input[formControlName=password]")).sendKeys("Florida25!");
        element(by.css("button[type=submit]")).click().then(function() {
            browser.sleep(1000);
        });
        browser.waitForAngularEnabled(false);
        element(by.id("dropDownAccountID")).click().then(function(){
            browser.sleep(1000);
        });
        element(by.id("accountID-0020")).click().then(function(){
            browser.sleep(1000);
        });
        //ADD LOCATION
        element(by.id("buttonAddLocation")).click().then(function(){
            browser.sleep(1000);
        });
    element(by.id("myLocationId")) .click().sendKeys("336")
    element(by.id("businessName")) .click().sendKeys("Walmart SuperCenter")
    element(by.id("storeNumber")) .click().sendKeys("01")
    element(by.id("address")) .click().sendKeys("8990 Turkey Lake ")
    element(by.id("Subaddress")) .click().sendKeys("Rd")
    element(by.id("city")) .click().sendKeys("Orlando").then(function(){
    element(by.css("select[formControlName=state]")).click().sendKeys("Florida")
    element(by.id("zipCode")) .click().sendKeys("32819").then(function(){
    element(by.css("select[formControlName=Country]")).click().sendKeys("United States")
    })
})
    element(by.id("buttonSubmit")).click().then(function(){
        browser.sleep(5000);
    })
})
})