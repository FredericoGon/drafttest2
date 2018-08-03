$(document).ready(function(){
  $("#jqbutton").click(function(){
    var x = Math.floor((Math.random() * 119) + 1);
    $("#jqimg").attr({
      "src" : rares[x]
  });
});
$("#createButton").click(function(){
  var x = Math.floor((Math.random() * 119) + 1);
  var img1 = $("<img></img>").attr({
    "src" : rares[x]
    });
    $("#createDiv").append(img1);
    $("#createButton").remove();
});
$("#createButton2").click(function(){
  var x = Math.floor((Math.random() * 9) + 1);
  var img2 = $("<img></img>").attr({
    "src" : arrayTest.source[x]
    });
    $("#createDiv2").append(img2);
    $("#createButton2").remove();
});
});