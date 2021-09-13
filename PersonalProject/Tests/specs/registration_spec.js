const login = require('../POMs/login');
let registration = require('../POMs/registration');

describe('registration' ,function(){

    beforeEach(function(){
        browser.get("http://localhost:4200/register");
    });
    
    it('Registration page loads',function(){
        registration.checkTitle();
    });

    it('Attempt to register without username',function(){
        registration.enterPassword('Testing');
        
        registration.enterRepeatPassword('Testing');

        registration.clickSubmit();
        
        registration.checkTitle('You must enter a username');
    });
    it('Attempt to register without password',function(){
        registration.enterUsername('Testing');

        registration.clickSubmit();
        
        registration.checkTitle('You must enter a password');
    });

    it('Attempt to register without matching passwords',function(){
        registration.enterUsername('Testing');
        
        registration.enterPassword('Testing');

        registration.enterRepeatPassword('Test');

        registration.clickSubmit();
        
        registration.checkTitle('Passwords No Not Match');
    });

    it('Can return to Login', function(){
        registration.returnToLogin();
        login.confirmTitle();
    });
})