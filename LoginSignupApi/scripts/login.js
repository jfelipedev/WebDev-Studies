// declaring varibles to get labels and inputs
let theEmail = document.querySelector("#inputEmail");
let labelEmail = document.querySelector("#labelEmail");

let password = document.querySelector("#inputPassword");
let labelPassword = document.querySelector("#labelPassword");

let errorMsg = document.querySelector("#errorMsg");

const regexMail = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
const urlLogin = 'https://ctd-todo-api.herokuapp.com/v1/users/login';

// function to validate that the data is correct according to what was stored in localstorage and grant the user access to the app
function login() {
// 
let email = inputEmail.value.toLowerCase();
   inputEmail.value = email;
   let pass = inputPassword.value

   if (regexMail.test(email)) {
      localStorage.setItem('login', JSON.stringify({ email: email }));

      const data = {
         email: email,
         password: pass,
      };

      const settings = {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(data),
      };

      fetch(urlLogin, settings)
         .then(response => {
            if (response.status === 201) {
               return response.json()
            }
            throw response;
         })
         .then(info => {
            console.log(info)
            // alert("Login efetuado com sucesso!")
            location.href = 'tarefas.html';
         })
         .catch(err => {
            console.log(err);
            errorLogin()
            // alert("Falha no login!")
         });

    // informs the user that the data is incorrect
  } function errorLogin () {
    theEmail.setAttribute('style', 'border-color:red')
    labelEmail.setAttribute('style', 'color:red')

    password.setAttribute('style', 'border-color:red')
    labelPassword.setAttribute('style', 'color:red')

    errorMsg.setAttribute('style', 'display: block')
    errorMsg.innerHTML = `Email ou Senha incorretos!`

    theEmail.focus()
  }

}