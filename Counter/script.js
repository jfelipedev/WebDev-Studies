function verificar(){
  let comeco = document.getElementById('begin');
  let final = document.getElementById('finish');
  let incremento = document.getElementById('step');
  let res = document.querySelector('div#res');
    
    if (comeco.value.length == 0 || final.value.length == 0 || incremento.value.length == 0){
    window.alert ('Verifique os dados novamente!')
    }else{
         res.innerHTML = `<b>Contando: </b>`
              let n1 = Number (comeco.value);
              let n2 = Number (final.value);
              let n3 = Number (incremento.value);
              if(n3 <= 0){
                window.alert ('Impossível de contar. Considerando passo como 1');
                n3 = 1;
              }
        if (n1 < n2){
          for (let cont = n1; cont <= n2; cont += n3){
          res.innerHTML += `${cont} `;
        }
      }else{
          for (let cont = n1; cont >= n2; cont -= n3){
          res.innerHTML += `${cont} `;
        }
      }
    }
  }
