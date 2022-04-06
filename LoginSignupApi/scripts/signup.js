// declaring varibles to get labels and inputs
let labelName = document.querySelector("#labelName");
let theName = document.querySelector("#name");
let validTheName = false;

let nickname = document.querySelector("#nickname");
let labelNickName = document.querySelector("#labelNickName");
let validNickName = false;

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");
let validEmail = false;

let password = document.querySelector("#password")
let labelPassword = document.querySelector("#labelPassword")
let validPassword = false;

let repassword = document.querySelector("#repassword")
let labelRepassword = document.querySelector("#labelRepassword")
let validrepassword = false;

let errorMsg = document.querySelector("#errorMsg")
let successMsg = document.querySelector("#successMsg")

//styling the name
theName.addEventListener('keyup', () => {
  if (theName.value.length <= 2) {
    labelName.setAttribute("style", "color:red")
    labelName.innerHTML = "Insira ao menos 3 caracters!"
    theName.setAttribute("style", "border-color: red", "color: red")
  } else {
    labelName.setAttribute("style", "color:black")
    labelName.innerHTML = "Nome:"
    theName.setAttribute("style", "border-color: green")
    validTheName = true;
  }
})

// add limits to the name input
function lettersOnly(input) {
  let validName = /[^a-z]/gi;
  input.value = input.value.replace(validName, "")
}

//styling the nickname
nickname.addEventListener('keyup', () => {
  if (nickname.value.length <= 2) {
    labelNickName.setAttribute("style", "color:red")
    labelNickName.innerHTML = "Insira ao menos 3 caracters!"
    nickname.setAttribute("style", "border-color: red", "color: red")
  } else {
    labelNickName.setAttribute("style", "color:black")
    labelNickName.innerHTML = "Apelido:"
    nickname.setAttribute("style", "border-color: green")
    validNickName = true;
  }
})

//styling the password
password.addEventListener('keyup', () => {
  if (password.value.length <= 5) {
    labelPassword.setAttribute("style", "color:red")
    labelPassword.innerHTML = "Insira ao menos 6 caracters!"
    password.setAttribute("style", "border-color: red", "color: red")
  } else {
    labelPassword.setAttribute("style", "color:black")
    labelPassword.innerHTML = "Senha:"
    password.setAttribute("style", "border-color: green")
    validPassword = true;
  }
})
//styling the repassword
repassword.addEventListener('keyup', () => {
  if (repassword.value != password.value) {
    labelRepassword.setAttribute("style", "color:red")
    labelRepassword.innerHTML = "Senha não corresponde!"
    repassword.setAttribute("style", "border-color: red", "color: red")
  } else {
    labelRepassword.setAttribute("style", "color:black")
    labelRepassword.innerHTML = "Repetir senha:"
    repassword.setAttribute("style", "border-color: green")
    validrepassword = true;
  }
})

// validating email input regex
function validateEmail(mail) {
  if (/^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/.test(mail.value)) {
    labelEmail.setAttribute("style", "color:black")
    labelEmail.innerHTML = "Email:"
    email.setAttribute("style", "border-color: green")
    validEmail = true;
  } else {
    labelEmail.setAttribute("style", "color:red")
    labelEmail.innerHTML = "Email invalido!"
    email.setAttribute("style", "border-color: red", "color: red")
  }
}

// registering the new user in local storage
function register() {

  //checks checks if all inputs were set to true
  if (validTheName && validNickName && validEmail && validPassword && validrepassword) {
    let configuracaoRequisicao = {
      method: 'POST',
      body: JSON.stringify({
        firstName: theName.value,
        lastName: nickname.value,
        email: email.value.toLowerCase(),
        password: password.value
      }),
      headers: {
        'Content-type': 'application/json'
      },
    };

    // Calling the API
    fetch("https://ctd-todo-api.herokuapp.com/v1/users", configuracaoRequisicao)

      .then((response) => {
        // checks if the status is 201 (ok status). If it is not then: catch.
        if (response.status == 201) {
          return response.json()
        }
        // If the response != (201), throw a throw so that the execution falls on Catch()
        throw response;
      }).then(function (resposta) {
        registrationSuccess(theName.value, nickname.value, email.value, resposta.jwt)
      })
      .catch(error => {
        registrationError(error)
      });

    // success message delayed to pretend it is signing user up
    successMsg.setAttribute('style', 'display: block');
    successMsg.innerHTML = ('Cadastrando usuário...');
    errorMsg.setAttribute('style', 'display: none');
    errorMsg.innerHTML = '';

  }
  // error msg if the user do not enter valid information 
  else {
    errorMsg.setAttribute("style", "display: block");
    errorMsg.innerHTML = ('Preencha os campos corretamente!');
    successMsg.innerHTML = '';
    successMsg.setAttribute('style', 'display: none');
  }

}

function registrationSuccess(nome, sobrenome, email, jsonResponse) {
  localStorage.setItem("user", JSON.stringify(
    {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      token: jsonResponse
    }
  )
  )
  // Redirects to home page
  setTimeout(() => {
    window.location.href = 'index.html'
  }, 3000);
}
//function that console log the catch()
function registrationError(statusReceived) {
  console.log("Erro ao cadastrar");
  console.log(statusReceived)
}