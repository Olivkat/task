btn.addEventListener("click",fnc);


function fnc (){
    if ((login.value == 'kat') && (pass.value == '123')){
        alert("You login.");
    }
    else{
        alert("Login or password is not correct");
    }
    console.log(login.value);
    console.log(pass.value);
}
