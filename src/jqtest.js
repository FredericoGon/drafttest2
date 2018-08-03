$(document).ready(function(){
  $("#jqbutton").click(function(){
    var x = Math.floor((Math.random() * 119) + 1);
    $("#jqimg").attr({
      "src" : rares[x]
  });
});
$("#createButton").click(() => {
  var x = Math.floor((Math.random() * 119) + 1);
  var img1 = $("<img>").attr({
    "src" : rares[x]
    });
    $("#createDiv").append(img1);
    $("#createButton").remove();
});
$("#createButton2").click(()=>{
  var arrayRare = arrayTest.filter(carta => carta.rarity == "rare")
  var max = arrayRare.length
  var x = Math.floor((Math.random() * max));
  var img2 = $("<img>").attr({
    "src" : arrayRare[x].source
    });
    $("#createDiv2").append(img2);
    $("#createButton2").remove();

  var arrayUncommon = arrayTest.filter(carta => carta.rarity == "uncommon")
  var max = arrayUncommon.length
  var x = Math.floor((Math.random() * max));
  var img3 = $("<img>").attr({
  "src" : arrayUncommon[x].source
  });
  $("#createDiv2").append(img3);

  var arrayCommon = arrayTest.filter(carta => carta.rarity == "common")
  var max = arrayCommon.length
  var x = Math.floor((Math.random() * max));
  var img4 = $("<img>").attr({
  "src" : arrayCommon[x].source
  });
  $("#createDiv2").append(img4);
});
$("#colors").click(()=>{
  // aqui vai a função para organizar o booster por cores!!
})

});