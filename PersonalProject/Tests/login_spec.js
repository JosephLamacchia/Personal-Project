let login = require('../Tests/POMs/login');

describe('Login',function(){

    beforeEach(function(){
        browser.get('http://localhost:4200/login');
    })

    it('Login page loads',function(){
        
    })
    
    it('Attempt login with no credentials',function(){
        login.clickSubmit();

        login.checkError('Please Enter Username and Password');
    })

    it('Attempt login with username and without password',function(){
       login.enterUsername('Testing');
       
        login.clickSubmit();

        login.checkError('Please Enter Password');
    })

    it('Attempt login with unrecognized credentials',function(){
        login.enterUsername('Testing');

        login.enterPassword('Testing')
        
        login.clickSubmit();
 
         login.checkError('User Not Found');
     })

     xit('Attempt login with recognized credentials',function(){
        login.enterUsername('User');

        login.enterPassword('Pass')
        
        login.clickSubmit();
 
         login.checkError('User Not Found');
     })

     it('Route to registration page',function(){
        login.enterUsername('Testing');

        login.enterPassword('Testing')
        
        login.clickSubmit();
 
         login.checkError('User Not Found');
     })
});