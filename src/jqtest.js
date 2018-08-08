$(document).ready(function(){
//   Teste com a Array mais complexa

$("#createButton2").click(()=>{
  var arrayRare = arrayTest.filter(carta => carta.rarity == "rare")
  var max = arrayRare.length
  var x = Math.floor((Math.random() * max));
  var img2 = $("<img>").attr({
    "id" : "firstCard",
    "src" : arrayRare[x].source
    });
    $("#createDiv2").append(img2);
    $("#createButton2").remove();

  var arrayUncommon = arrayTest.filter(carta => carta.rarity == "uncommon")
  var max = arrayUncommon.length
  var x = Math.floor((Math.random() * max));
  var img3 = $("<img>").attr({
  "id" : "secondCard",
  "src" : arrayUncommon[x].source
  });
  $("#createDiv2").append(img3);

  var arrayCommon = arrayTest.filter(carta => carta.rarity == "common")
  var max = arrayCommon.length
  var x = Math.floor((Math.random() * max));
  var img4 = $("<img>").attr({
  "id" : "thirdCard",
  "src" : arrayCommon[x].source
  });
  $("#createDiv2").append(img4);
});

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

// Tentar fazer o código para gerar uma nova array com o Booster

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
while(booster.length != 9){ // Mandando gerar cartas até chegar à 4 cartas no booster
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

})
// Teste para organizar as cores

$("#colors").click(()=>{
  var images = [
    "http://mythicspoiler.com/m19/cards/woodlandstream1.jpg",
    "http://mythicspoiler.com/m19/cards/totallylost.jpg"
  ];
  images.push(("#thirdCard").attr("src"));
  //images.push(img3);
  //images.push(img4);
  //images.sort();
  var imgA = $("<img>").attr({
    "src" : images[2]
    });
  $("#createDiv3").append(imgA);
})




// Final da ready function
});