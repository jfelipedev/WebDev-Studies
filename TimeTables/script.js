// function multiply(){
//   let enter = document.getElementById('begin')
//   let res = document.querySelector('div#res');

//   var toMultiply = Number (enter.value);
  
//   for (var i = 0;; i++) { 
//     // console.log (`${toMultiply} multiplicado por ${i} é igual a ${toMultiply*i}`);
//   res.innerHTML += (` <p>${toMultiply} multiplicado por ${i} é igual a ${toMultiply*i}</p>`);
//     if (i > 9) break;       

//     }
//   }


function multiply(){
  let enter = document.getElementById('begin')
  let tab = document.getElementById ('times')
  // let res = document.querySelector('div#res');

  if(enter.value.length == 0){
    window.alert('Please, enter a number')
} else{
    let toMultiply = Number (enter.value);
    let counter = 1;
    tab.innerHTML = '';
    while (counter <= 10){
      let item = document.createElement ('option')
      item.text = `${toMultiply} * ${counter} = ${toMultiply*counter}`
      item.value = `tab${counter}`
      tab.appendChild(item)
      counter ++
    }
  }
}
  


