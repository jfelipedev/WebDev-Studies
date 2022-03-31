function carregar(){
var msg = document.querySelector('div.msg');
var img = document.querySelector('img.imagem');
var data = new Date();
var hora = data.getHours()
var minuto = data.getMinutes()


if (hora >= 5 && hora < 12){
  img.src = 'imgs/morningweb.png';
  msg.innerHTML = `Bom dia! Agora são ${hora}:${minuto} horas da manhã.`
  document.body.style.background = '#94840e'
}else if (hora >= 12 && hora < 16){
  img.src = 'imgs/afternoonweb.png';
  msg.innerHTML = `Boa tarde! Agora são ${hora}:${minuto} horas.`
  document.body.style.background = '#cde4fe'
}else if (hora >= 16 && hora < 18) {
  img.src = 'imgs/sunsetweb.png'
  msg.innerHTML = `Boa tarde! Agora são ${hora}:${minuto} horas.`
  document.body.style.background = '#ff8400'
} else {
  img.src = 'imgs/nightweb.png'
  msg.innerHTML = `Boa noite! Agora são ${hora}:${minuto} horas.`
  document.body.style.background = '#0e2b2d'
}
}