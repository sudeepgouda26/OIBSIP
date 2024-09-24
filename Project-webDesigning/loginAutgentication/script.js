 const registerUsername= document.getElementById("register-username");
 const registerPassword= document.getElementById("register-password");
 const loginusername= document.getElementById("login-username");
 const loginpassword= document.getElementById("login-password");

 
 
 function register() {
    
    const username =registerUsername.value;
    const password=registerPassword.value;
    if(username==""|| password==""){
        alert("plese fill the details completely")
    }
    localStorage.setItem(username,password)
    registerUsername.value=""
    registerPassword.value=""
    alert("registered successfully");
    
 }

 function login() {
    const username =loginusername.value;
    const password =loginpassword.value;
    console.log(password)
    if (localStorage.getItem(username) === password) 
        {
            alert("login succesfully..")
            document.getElementById("register-form").style.display="none";
            document.getElementById("login-form").style.display="none";
            document.getElementById("secure-page").style.display="block";
        
    }
    loginpassword.value="";
    loginusername.value="";
    
 }
function logout() {
    document.getElementById("register-form").style.display="block";
    document.getElementById("login-form").style.display="block";
    document.getElementById("secure-page").style.display="none";
    
}
