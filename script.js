let buttonLogin= document.getElementById("button-login");
let buttomSignup= document.getElementById("buttom-sign-up");

let formRegister= document.querySelector(".register");
let formLoggin= document.querySelector(".loggin")

buttonLogin.addEventListener("click", e=>{

    formRegister.classList.add("hide");
    formLoggin.classList.remove("hide");

});

buttomSignup.addEventListener("click", e=>{

    formLoggin.classList.add("hide");
    formRegister.classList.remove("hide");
    
})