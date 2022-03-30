
  let enter = document.getElementById('entry')
  let tab = document.getElementById ('colection')
  let list = document.querySelector('div#select')
  let colector = [];

  function isNumber(n){
    if(Number(n)>= 1 && Number(n)<=100){
      return true;
    }
      return false;
    }

  
  function inList(n,l){
    if (l.indexOf(Number(n)) != -1){
      return true;
    }
      return false;
    }

  function add(){
    if(isNumber(enter.value) && !inList(enter.value, colector)){
      colector.push(Number(enter.value));
      let item = document.createElement ('option');
      item.text = `Valor ${enter.value} adicionado`
      tab.appendChild(item)
      list.innerHTML = '';
    }else {
      window.alert ('Invalid Value or Already Inserted');
    }
    enter.value ='';
    enter.focus();
  }

function result(){
  if(colector.length == 0){
    window.alert ('You did not insert any value')
  } else{
    let total = colector.length;
    let higher = colector[0];
    let lower = colector [0];
    let sum = 0;
    let average = 0
    for (let pos in colector){
      sum += colector[pos];
      if(colector[pos]> higher){
        higher = colector[pos]
        if (colector[pos]< lower){
          lower = colector[pos]
        }
      }
    }
    average = sum/total;
    list.innerHTML = ''
    list.innerHTML += `<p>A sua lista possui ${total} elemento(s)</p>`
    list.innerHTML += `<p>O maior valor informado foi ${higher}</p>`
    list.innerHTML += `<p>O menor valor informado foi ${lower}</p>`
    list.innerHTML += `<p>A soma os valores da sua lista foi de ${sum}</p>`
    list.innerHTML += `<p>A média dos valores da sua lista foi de ${average.toFixed(2)}</p>`
  }
}

