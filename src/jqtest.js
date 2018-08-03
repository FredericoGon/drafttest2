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
  var y = Math.floor((Math.random() * 4) + 1);
  var img3 = $("<img>").attr({
  "src" : arrayUncommon[y].source
  });
  $("#createDiv2").append(img3);

  var z = Math.floor((Math.random() * 9) + 1);
  var img4 = $("<img>").attr({
  "src" : arrayTest[z].source
  });
  $("#createDiv2").append(img4);

});
});