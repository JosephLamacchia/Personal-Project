
exports.config = {
  directConnect: true,

  
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  onPrepare: function(){

    browser.manage().timeouts().implicitlyWait(15000);


    
    
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: './',
        filePrefix: 'xmlresults'
    }));
  },
  
  

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['C:/Users/josep/OneDrive/Documents/GitHub/Personal-Project/PersonalProject/Tests/specs/login_spec.js',
  'C:/Users/josep/OneDrive/Documents/GitHub/Personal-Project/PersonalProject/Tests/specs/registration_spec.js',
  'C:/Users/josep/OneDrive/Documents/GitHub/Personal-Project/PersonalProject/Tests/specs/login-registration-integreation_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  //HTMLReport called once tests are finished
onComplete: function() {
  var browserName, browserVersion;
  var capsPromise = browser.getCapabilities();

  capsPromise.then(function (caps) {
     browserName = caps.get('browserName');
     browserVersion = caps.get('version');

     var HTMLReport = require('protractor-html-reporter');

     testConfig = {
         reportTitle: 'Test Execution Report',
         outputPath: './',
         screenshotPath: 'config/screenshots',
         testBrowser: browserName,
         browserVersion: browserVersion,
         modifiedSuiteName: false,
         screenshotsOnlyOnFailure: true
     };
     new HTMLReport().from('xmlresults.xml', testConfig);
 });
}

};
