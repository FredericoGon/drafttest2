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

function generateCard(nomeDaArray, cardNumber){
var max = nomeDaArray.length
var cardNumber = Math.floor((Math.random() * max));
booster.push(nomeDaArray[cardNumber])
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
var card1 = Math.floor((Math.random() * max));
booster.push(arrayRare[card1])
var imgC1 = $("<img>").attr({
  "src" : booster[0].source
  });
  $("#createBoosterDiv").append(imgC1);
//card 2 Uncommon
var arrayUncommon = arrayTest.filter(carta => carta.rarity == "uncommon")
var max = arrayUncommon.length
var card2 = Math.floor((Math.random() * max));
booster.push(arrayUncommon[card2])
var imgC2 = $("<img>").attr({
  "src" : booster[1].source
  });
  $("#createBoosterDiv").append(imgC2);
//card 3 Uncommmon
var arrayUncommon = arrayTest.filter(carta => carta.rarity == "uncommon")
var max = arrayUncommon.length
var card3 = Math.floor((Math.random() * max));
booster.push(arrayUncommon[card3])
var imgC3 = $("<img>").attr({
  "src" : booster[2].source
  });
  $("#createBoosterDiv").append(imgC3);
//card 4 Uncommmon
var arrayUncommon = arrayTest.filter(carta => carta.rarity == "uncommon")
var imgC4 = generateCard(arrayUncommon, card4)
  $("#createBoosterDiv").append(imgC4);
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