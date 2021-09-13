let registration = function(){

let username = element(by.css('#username'));

let password = element(by.css('#password'));

let submitButton = element(by.css("[name='submit']"));

let repeatpassword = element(by.css('#repeatpassword'));

let title = element(by.css('.text-center'));

let errorMessage = element(by.css('h5'));

let loginLink = element(by.css('a'));

this.enterUsername = function(input){
username = input;
}

this.enterPassword = function(input){
    password = input;
}

this.enterRepeatPassword = function(input){
    repeatpassword = input;
}

this.checkTitle = function(){
    expect(title.isPresent()).toBe(true);
}

this.clickSubmit = function(){
submitButton.click();
}

this.checkError = function(input){
expect(errorMessage.getText()).toContain(input);
}

this.returnToLogin = function(){
    loginLink.click();
}

}
module.exports = new registration();