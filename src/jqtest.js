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
});