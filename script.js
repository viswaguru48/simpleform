const form = document.getElementById("form");

form.addEventListener('submit', e =>{
    e.preventDefault();
});

//name
let username = document.getElementById("uname");
let nameError = document.getElementById("error1");
let correct1 = document.getElementById("correct1");
let wrong1 = document.getElementById("wrong1");

function val_name(){
    if(username.value ===""){
        nameError.innerHTML = "Username is required.";
        username.style.border = "2px solid red";
        wrong1.style.display = "block";
        correct1.style.display = "none";
    }
    else if(username.value.length < 4 || username.value.length > 15){
        nameError.innerHTML = "Username should be min 4 and max 15 Characters";
        username.style.border = "2px solid red";
        wrong1.style.display = "block";
        correct1.style.display = "none";
    }
    else{
        nameError.innerHTML = "";
        username.style.border = "2px solid #00df00";
        wrong1.style.display = "none";
        correct1.style.display = "block";
    }
}

//email
let email = document.getElementById("email");
let mailError = document.getElementById("error2");
let correct2 = document.getElementById("correct2");
let wrong2 = document.getElementById("wrong2");

function val_mail(){
    if(email.value ===""){
        mailError.innerHTML = "Email is required.";
        email.style.border = "2px solid red";
        wrong2.style.display = "block";
        correct2.style.display = "none";
    }
    else if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML = "Enter a valid email";
        email.style.border = "2px solid red";
        wrong2.style.display = "block";
        correct2.style.display = "none";
    }
    else{
        mailError.innerHTML = "";
        email.style.border = "2px solid #00df00";
        wrong2.style.display = "none";
        correct2.style.display = "block";
    }
}

//password
let password = document.getElementById("password");
let passError = document.getElementById("error3");
let correct3 = document.getElementById("correct3");
let wrong3 = document.getElementById("wrong3");

function val_pass1(){
    if(password.value === ""){
        passError.innerHTML = "Password is required.";
        password.style.border = "2px solid red"; 
        wrong3.style.display = "block";
        correct3.style.display = "none";
    }
    else if(password.value.length < 8){
        passError.innerHTML = "Password must be 8 or more Character.";
        password.style.border = "2px solid red";
        wrong3.style.display = "block";
        correct3.style.display = "none";
    }
    else{
        passError.innerHTML ="";
        password.style.border = "2px solid #00df00";
        wrong3.style.display = "none";
        correct3.style.display = "block";
    }
}

//password2
let password2 = document.getElementById("password2");
let passError2 = document.getElementById("error4");
let correct4 = document.getElementById("correct4");
let wrong4 = document.getElementById("wrong4");

function val_pass2(){
    if(password2.value === ""){
        passError2.innerHTML = "Password is required.";
        password2.style.border = "2px solid red"; 
        wrong4.style.display = "block";
        correct4.style.display = "none";
    }
    else if(password2.value !== password.value){
        passError2.innerHTML = "Password doesn't match"
        password2.style.border = "2px solid red";
        wrong4.style.display = "block";
        correct4.style.display = "none";
    }
    else{
        passError2.innerHTML ="";
        password2.style.border = "2px solid #00df00";
        wrong4.style.display = "none";
        correct4.style.display = "block";
    }
}
