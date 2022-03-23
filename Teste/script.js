function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.querySelector('div#res');
  if (fano.value.length == 0 || Number (fano.value) > ano){
    window.alert ('Verifique os dados novamente!')
  }else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number (fano.value);
    var genero = '';
    var img = document.createElement ('img');
    img.setAttribute ('id','foto')
    if(fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 12){
        //criança
        img.setAttribute('src', 'imgs/kidboy.png');
        res.innerHTML = `Detectamos que você é um menino de ${idade} anos.`
      }else if (idade < 30){
        //jovem
        img.setAttribute('src', 'imgs/youngboy.png');
        res.innerHTML =`Detectamos que você é um jovem de ${idade} anos.`
      }else if (idade < 50){
        img.setAttribute('src', 'imgs/maleadult.png');
        res.innerHTML =`Detectamos que você é um homem adulto de ${idade} anos.`
      } else {
        img.setAttribute('src', 'imgs/oldman.png');
        res.innerHTML =`Detectamos que você é um senhor de ${idade} anos.`
      }
    }else if (fsex[1].checked){
      genero = 'Mulher'
      if (idade >= 0 && idade < 12){
        //criança
        img.setAttribute('src', 'imgs/kidgirl.png');
        res.innerHTML =`Detectamos que você é uma menina de ${idade} anos.`
      }else if (idade < 30){
        //jovem
        img.setAttribute('src', 'imgs/younggirl.png');
        res.innerHTML =`Detectamos que você é uma jovem de ${idade} anos.`
      }else if (idade < 50){
        //adulto
        img.setAttribute('src', 'imgs/femaleadult.png');
        res.innerHTML =`Detectamos que você é uma adulta de ${idade} anos.`
      } else {
        //idoso
        img.setAttribute('src', 'imgs/oldwoman.png');
        res.innerHTML =`Detectamos que você é uma senhora de ${idade} anos.`
      }
    }
    
    res.appendChild(img); 
  }
}