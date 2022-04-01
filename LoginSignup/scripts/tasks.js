let logOutButton = document.querySelector('#closeApp');
let userName = document.querySelector('#userName')

// convert the data back to JS string so we can use innerHtml
let userLogged = JSON.parse(localStorage.getItem('userLogged'))
// sets the userName on the screen to identify which user is logged in
userName.innerHTML = `${userLogged.name}`

// This IF prevents the user from entering the app's page without log in
if (localStorage.getItem('token') == null) {
  alert('Você precisa estar logado para acessar essa página!')
  window.location.href = 'https://jfelipedev.github.io/WebDev-Studies/LoginSignup/index.html
'
}

// This function "cleans" part of the data from the local storage when the user presses the logout button
function logOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('userLogged');
  window.location.href = 'index.html'
}
