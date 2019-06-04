
function login(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    var studentUserName = "Abbey";
    var studentPassword = "1405";
    if (username == studentUserName && password == studentPassword){
        window.location.href = "function.html";
    }
    else{
        alert("Invalid Username/Password combination");
    }
}
