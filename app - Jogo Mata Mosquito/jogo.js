var altura =0;
var largura =0;
var vida = 3;
var tempo = 10;


function ajusteTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    // console.log(`${altura} x ${largura}`);
    
}
ajusteTamanhoPalcoJogo();

var nivel = window.location.search.replace('?','');
var criarMosquitoTempo = 1500

if(nivel == 'normal'){
  criarMosquitoTempo = 1500
} else if(nivel == 'dificil'){
    criarMosquitoTempo = 1000
  }else if(nivel == 'ean'){
    criarMosquitoTempo = 750
  }



var contagem_Tempo= setInterval( function(){
    tempo --;
if (tempo>=0){
    
document.getElementById('tempo').innerHTML = tempo;
}else{
    window.location.href = 'vitoria.html'
clearInterval(contagem_Tempo);
clearInterval(span_Mosquito);
document.getElementById('mosquito').remove();

}

}, 1000)




function posicaoRandomica(){

//removendo elemento com id 'mosquito' caso exista
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove();
if(vida > 0){
    document.getElementById('v'+ vida).src = "./imagens/coracao_vazio.png";
    vida--;
}
else{
    window.location.href = 'fim_de_jogo.html'
}



}

var alturaX = Math.floor(Math.random()*altura) - 90;
var larguraY = Math.floor(Math.random()*largura) - 90;

alturaX = alturaX < 0 ? 0 : alturaX;
larguraY = larguraY < 0 ? 0 : larguraY;

console.log(`${alturaX} x ${larguraY} `);

var mosquito = document.createElement('img');
mosquito.src = './imagens/mosquito.png';
mosquito.className = tamanhoMosquito() + ' ' +  ladoMosquito();
mosquito.style.left = larguraY+'px';
mosquito.style.top = alturaX+'px';
mosquito.style.position = 'absolute';
mosquito.id = 'mosquito';
mosquito.onclick = function (){
    this.remove();

}

document.body.appendChild(mosquito);
}


function tamanhoMosquito(){
    var classe = Math.floor(Math.random()*3);

    switch (classe){

        case 0:
            return 'mosquito1';
            
        case 1:
            return 'mosquito2';
            
        case 2:
            return 'mosquito3';

    }
}

    
function ladoMosquito(){
    var classe = Math.floor(Math.random()*2);

    switch (classe){

        case 0:
            return 'ladoA';
            
        case 1:
            return 'ladoB';
            

    }
}
    
    


