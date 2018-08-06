$(document).ready(function(){
// Teste para usar Jquery para trocar imagem
  $("#jqbutton").click(function(){
    var x = Math.floor((Math.random() * 119) + 1);
    $("#jqimg").attr({
      "src" : rares[x]
  });
});
// Teste para usar Jquery para criar uma imagem
$("#createButton").click(() => {
  var x = Math.floor((Math.random() * 119) + 1);
  var img1 = $("<img>").attr({
    "src" : rares[x]
    });
    $("#createDiv").append(img1);
    $("#createButton").remove();
});

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

// Teste para organizar as cores

$("#colors").click(()=>{
  var images = [
    "http://mythicspoiler.com/m19/cards/woodlandstream1.jpg",
    "http://mythicspoiler.com/m19/cards/totallylost.jpg"
  ];
  images.push(("#thirdCard").src);
  //images.push(img3);
  //images.push(img4);
  //images.sort();
  var imgA = $("<img>").attr({
    "src" : images[2]
    });
  $("#createDiv3").append(imgA);
})
});