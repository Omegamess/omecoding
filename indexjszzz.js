// PASSWORD PROTECTION SCRIPT

function TheLogin() {

    var usrnm1 = 'omecoding'
    
    var usrnm2 = 'demouser'
    
    var pswd1 = 'staffonly';
    
    var pswd2 = 'demopass123'
    
    if (this.document.login.usrnm.value == usrnm1) {
        if (this.document.login.pass.value == pswd1) {
            top.location.href="onlyomezzz.html";
        }
      
    }
    else {
    
    if (this.document.login.usrnm.value == usrnm2) {
        if (this.document.login.pass.value == pswd2) {
         top.location="learnmain.html"
        }
    }
    else {
        window.alert('Incorrect username or password, please try again!')
    }
    
      }
    }
