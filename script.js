
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
    
});




document.getElementById("sign-up-bottom-send").addEventListener("click", RegistrarUsuario);
document.getElementById("login-bottom-send").addEventListener("click", LoginUsuario);


async function RegistrarUsuario(e) {
  e.preventDefault();
  const registerUsername = document.getElementById("nameUser-signup").value;
  const registerEmail = document.getElementById("emailUser-signup").value;
  const registerPassword = document.getElementById("passwordUser-signup").value;

  try {
    const newUser = {
      name: registerUsername,
      email: registerEmail,
      password: registerPassword
    };
    
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };

    const response = await fetch(
      "http://localhost:/register",
      config
    );
    alert(response);
  } catch (e) {
    alert("An error has occurred" + e);
  }
}


function getCookieExpirationDate(){
  const expirationDays = 10;
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expirationDays);
  return expirationDate.toUTCString();
}

async function LoginUsuario(e) {
  e.preventDefault();
  const loginEmail = document.getElementById("emailUser-login").value;
  const loginPassword = document.getElementById("passwordUser-login").value;

  try {
    const user = {
      name: loginEmail,
      password: loginPassword,
    };

    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const response = await fetch(
      "http://localhost:/",
      config
    );
    const data = await response.json();

    if (data.isAuthenticated === true) {
      //CODIGO DE REFERENCIA PARA AUTENTICAION
        // const refreshTokenExpirationDate = getCookieExpirationDate();
        // document.cookie = `accessToken=${data.token}; path=/; expires=${refreshTokenExpirationDate}`;
        // document.cookie = `refreshToken=${data.refreshToken}; path=/; expires=${refreshTokenExpirationDate}`;
        
        // window.location.href = "./view/welcome.html";

      
    } else {
      alert(data.message);
    }
  } catch (e) {
    alert("An error has occurred" + e);
  }
}
