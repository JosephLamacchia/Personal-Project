

let login = function(){

    let username = element(by.css('#username'));

    let password = element(by.css('#password'));

    let submitButton = element(by.css("[name='submit']"));

    let errorMessage = element(by.css('h5'));
    
    let title = element(by.css('.text-center'));

    let registerLink = element(by.css('.text-center'));

    this.enterUsername = function(input){
        username.sendKeys(input);
    }

    this.enterPassword = function(input){
        password.sendKeys(input)
    }

    this.checkError = function(input){
        expect(errorMessage.getText()).toContain(input);
    }

    this.clickSubmit = function(){
        submitButton.click();
    }

    this.confirmTitle = function(){
        expect(title.isPresent()).toBe(true);
    }

    this.clickRegister = function(){
        registerLink.click();
    }


}

module.exports = new login();