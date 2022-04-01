// declaring varibles to get labels and inputs
let email = document.querySelector("#inputEmail");
let labelEmail = document.querySelector("#labelEmail");

let password = document.querySelector("#inputPassword");
let labelPassword = document.querySelector("#labelPassword");

let errorMsg = document.querySelector("#errorMsg");

// function to validate that the data is correct according to what was stored in localstorage and grant the user access to the app
function login() {

  //array that gets JSON objetct data
  let userList = [];

  //pupolated js objetc with JSON object data
  let userValidation = {
    name: '',
    nickname: '',
    email: '',
    password: ''
  }
  //convert JSON object to js string to populate array
  userList = JSON.parse(localStorage.getItem('userList'))

  //scan array to fill userValidation object
  userList.forEach((item) => {
    if (email.value == item.email && password.value == item.password) {
      userValidation = {
        name: item.theName,
        nickname: item.nickname,
        email: item.email,
        password: item.password
      }
    }
  })

  //Checks if the values placed in the email and password fields are the same as those placed in localstorage during the signup process
  if (email.value == userValidation.email && password.value == userValidation.password && email.value != '' && password.value != '') {
    window.location.href = 'tarefas.html'

    // creates a random token so that we can clean it later, to log out the user without losing their registration data
    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
    localStorage.setItem('token', token);

    localStorage.setItem('userLogged', JSON.stringify(userValidation))

    // informs the user that the data is incorrect
  } else {
    email.setAttribute('style', 'border-color:red')
    labelEmail.setAttribute('style', 'color:red')

    password.setAttribute('style', 'border-color:red')
    labelPassword.setAttribute('style', 'color:red')

    errorMsg.setAttribute('style', 'display: block')
    errorMsg.innerHTML = `Email ou Senha incorretos!`

    email.focus()
  }

}