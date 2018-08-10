$(document).ready(function(){
//   Teste com a Array mais complexa

// Fazer uma função com tudo necessário para criar a carta
// Ainda não está funcionando, então não estou usando essa Function em lugar nenhum

function generateCard(nomeDaArray, cardNumber){
var max = nomeDaArray.length
var x = Math.floor((Math.random() * max));
booster.push(nomeDaArray[x])
var img = $("<img>").attr({
  "src" : booster[cardNumber].source
  });
  return img;
}

// Função para gerar imagem

function createImage(imgName, arrayNmbr){
  var imgName = $("<img>").attr({
    "src" : booster[arrayNmbr].source
  });
  $("#createBoosterDiv").append(imgName);
}

//Código para gerar uma nova array com o Booster

$("#generateBooster").click(()=>{
var booster = []
//card 1 Rare
var arrayRare = arrayTest.filter(carta => carta.rarity == "rare")
var max = arrayRare.length
var x = Math.floor((Math.random() * max));
booster.push(arrayRare[x])
var imgC1 = $("<img>").attr({
  "src" : booster[0].source
  });
  $("#createBoosterDiv").append(imgC1);
//Array com todas as Uncommon
var arrayUncommon = arrayTest.filter(carta => carta.rarity == "uncommon")
var max = arrayUncommon.length
var x = Math.floor((Math.random() * max)); // randomizando o que vai gerar a primeira carta
booster.push(arrayUncommon[x]) // Gerando a primeira carta incomum, que é o item 1 do booster
while(booster.length != 4){ // Mandando gerar cartas até chegar à 4 cartas no booster
  max = arrayUncommon.length
  x = Math.floor((Math.random() * max)); // randomizando as próximas cartas
  while(booster.find(carta => carta.name == arrayUncommon[x].name)){ //compara
  max = arrayUncommon.length
  x = Math.floor((Math.random() * max));
  }
  booster.push(arrayUncommon[x])
}
//card 2 Uncommon
var imgC2 = $("<img>").attr({
  "src" : booster[1].source
  });
  $("#createBoosterDiv").append(imgC2);
//card 3 Uncommmon
var imgC3 = $("<img>").attr({
  "src" : booster[2].source
  });
  $("#createBoosterDiv").append(imgC3);
//card 4 Uncommmon
var imgC4 = $("<img>").attr({
  "src" : booster[3].source
  });
  $("#createBoosterDiv").append(imgC4);
//Array com todas as Common
var arrayCommon = arrayTest.filter(carta => carta.rarity == "common")
var max = arrayCommon.length
var x = Math.floor((Math.random() * max)); // randomizando o que vai gerar a primeira carta
booster.push(arrayCommon[x]) // Gerando a primeira carta incomum, que é o item 1 do booster
while(booster.length != 14){ // Mandando gerar cartas até chegar à 4 cartas no booster
  max = arrayCommon.length
  x = Math.floor((Math.random() * max)); // randomizando as próximas cartas
  while(booster.find(carta => carta.name == arrayCommon[x].name)){ //compara
  max = arrayCommon.length
  x = Math.floor((Math.random() * max));
  }
  booster.push(arrayCommon[x])
}
//card 5 Common
var imgC5 = $("<img>").attr({
  "src" : booster[4].source
  });
  $("#createBoosterDiv").append(imgC5);
//card 6 Common
var imgC6 = $("<img>").attr({
  "src" : booster[5].source
  });
  $("#createBoosterDiv").append(imgC6);
//card 7 Common
var imgC7 = $("<img>").attr({
  "src" : booster[6].source
  });
  $("#createBoosterDiv").append(imgC7);
//card 8 Common
var imgC8 = $("<img>").attr({
  "src" : booster[7].source
  });
  $("#createBoosterDiv").append(imgC8);
//card 9 Common
var imgC9 = $("<img>").attr({
  "src" : booster[8].source
  });
  $("#createBoosterDiv").append(imgC9);
  //card 10 Common
var imgC10 = $("<img>").attr({
  "src" : booster[9].source
  });
  $("#createBoosterDiv").append(imgC10);
  //card 11 Common
var imgC11 = $("<img>").attr({
  "src" : booster[10].source
  });
  $("#createBoosterDiv").append(imgC11);
  //card 12 Common
var imgC12 = $("<img>").attr({
  "src" : booster[11].source
  });
  $("#createBoosterDiv").append(imgC12);
  //card 13 Common
var imgC13 = $("<img>").attr({
  "src" : booster[12].source
  });
  $("#createBoosterDiv").append(imgC13);
  //card 14 Common
var imgC14 = $("<img>").attr({
  "src" : booster[13].source
  });
  $("#createBoosterDiv").append(imgC14);
//array com todas as land comuns
  var arrayLands = arrayTest.filter(carta => carta.rarity == "lcommon")
  var max = arrayLands.length
  var x = Math.floor((Math.random() * max));
  booster.push(arrayLands[x])
  //card 15 Land Common
var imgC15 = $("<img>").attr({
    "src" : booster[14].source
    });
    $("#createBoosterDiv").append(imgC15);
  //Final de Generate Booster
})



// Teste para organizar as cores

$("#colors").click(()=>{
//$("#createBoosterDiv").remove();
//booster.sort();

var imgO1 = $("<img>").attr({
  "src" : booster[0].source
  });
  $("#organizeDiv").append(imgO1);
var imgO2 = $("<img>").attr({
  "src" : booster[1].source
  });
  $("#organizeDiv").append(imgO2);
var imgO3 = $("<img>").attr({
  "src" : booster[2].source
  });
  $("#organizeDiv").append(imgO3);
var imgO4 = $("<img>").attr({
  "src" : booster[3].source
  });
  $("#organizeDiv").append(imgO4);
var imgO5 = $("<img>").attr({
  "src" : booster[4].source
  });
  $("#organizeDiv").append(imgO5);
var imgO6 = $("<img>").attr({
  "src" : booster[5].source
  });
  $("#organizeDiv").append(imgO6);
var imgO7 = $("<img>").attr({
  "src" : booster[6].source
  });
  $("#organizeDiv").append(imgO7);
var imgO8 = $("<img>").attr({
  "src" : booster[7].source
  });
  $("#organizeDiv").append(imgO8);
var imgO9 = $("<img>").attr({
  "src" : booster[8].source
  });
  $("#organizeDiv").append(imgO9);
})




// Final da ready function
});