const login = require('../POMs/login');
const registration = require('../POMs/registration');

    describe('Register and Login',function(){

        it('Registration and Login',function(){

            browser.get("http://localhost:4200/register");

            function randomUserAndPass(length) {
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                  result += characters.charAt(Math.floor(Math.random() * 
             charactersLength));
               }
               return result;
            }

            let username = randomUserAndPass(10);
            let password = randomUserAndPass(10);



            registration.enterUsername(username);
            registration.enterPassword(password);
            registration.enterRepeatPassword(password);

            registration.clickSubmit();

            registration.returnToLogin();

            login.enterUsername(username);
            login.enterPassword(password);

            login.clickSubmit();

        });
        
    });