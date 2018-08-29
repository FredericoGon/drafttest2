$(document).ready(function(){

  function createImage(index, boosterCards){
    var imgName = $("<img>");
    imgName.attr("src", boosterCards[index].source);
    imgName.attr("class", "cardImg")
      return imgName;
  }

  function selectCards(cardRarity, cardCount, set) {

    var cardsFilteredByRarity = set.filter(carta => carta.rarity == cardRarity);
    var cardsSelected = [];
    var totalCardsPosibility = cardsFilteredByRarity.length;

    while(cardsSelected.length != cardCount){

      var cardIndex = Math.floor((Math.random() * totalCardsPosibility));
      var selectedCard = cardsFilteredByRarity[cardIndex];

      while(cardsSelected.find(carta => carta.name == selectedCard.name)){
        cardIndex = Math.floor((Math.random() * totalCardsPosibility));
        selectedCard = cardsFilteredByRarity[cardIndex];
      }

      cardsSelected.push(selectedCard);
    }

    return cardsSelected;
  }

   function generateBooster(set) {
    boosterNumber = [];
    var cardRare =      selectCards('rare',     1, set);
    var cardsUncommon = selectCards('uncommon', 3, set);
    var cardsCommon =   selectCards('common',   10, set);
    var cardLand =      selectCards('lcommon',  1, set);

    boosterNumber = boosterNumber.concat(cardRare);
    boosterNumber = boosterNumber.concat(cardsUncommon);
    boosterNumber = boosterNumber.concat(cardsCommon);
    boosterNumber = boosterNumber.concat(cardLand);

    $("#createBoosterDiv").append($("</br>"));

    for (var i = 0; i < boosterNumber.length; i++)
    {
      $("#createBoosterDiv").append(createImage(i, boosterNumber));
    }
    return boosterNumber
   }

  var booster1 = [];
  var booster2 = [];
  var booster3 = [];
  var booster4 = [];
  var booster5 = [];
  var booster6 = [];
  var pool = []; //Pool só é utilizada para o selado

  $("#generateBooster").click(()=>{
    booster1 = generateBooster(m19);
    booster2 = generateBooster(m19);
    booster3 = generateBooster(m19);
    booster4 = generateBooster(m19);
    booster5 = generateBooster(m19);
    booster6 = generateBooster(m19);
    pool = pool.concat(booster1); //Pool só é utilizada para o selado
    pool = pool.concat(booster2);
    pool = pool.concat(booster3);
    pool = pool.concat(booster4);
    pool = pool.concat(booster5);
    pool = pool.concat(booster6);
    $("#generateBooster").remove();
  })

  $("#draft").click(()=>{
    booster1 = generateBooster(m19);
    booster2 = generateBooster(m19);
    booster3 = generateBooster(m19);
    booster4 = generateBooster(m19);
    booster5 = generateBooster(m19);
    booster6 = generateBooster(m19);
    booster7 = generateBooster(m19);
    booster8 = generateBooster(m19);
    })

  //Funções exlucivas do Selado
  function colorToNumber(card) {
    switch (card.color) {
      case "white":
        return 100;
      case "blue":
        return 200;
      case "black":
        return 300;
      case "red":
        return 400;
      case "green":
        return 500;
      case "gold":
        return 600;
      case "artifact":
        return 700;
      default:
        return 800;
    }}
  function getQuantityCost(card) {
    return card.cost.length;
  }// Fim de funções para o Selado

  $("#colors").click(()=>{ //Inicio da organização do Selado
    $("#createBoosterDiv").children().remove();
    pool.sort((firstCard, secondCard) => {
      return (colorToNumber(firstCard) + getQuantityCost(firstCard)) -
             (colorToNumber(secondCard) + getQuantityCost(secondCard));
    });

    for (var i = 0; i < pool.length; i++)
    {
      $("#createBoosterDiv").append(createImage(i, pool));
    }

    $("#createBoosterDiv").append($("</br>"));
    $ ("#createBoosterDiv").append($('<img />',{src: 'http://mythicspoiler.com/m19/cards/plains1.jpg', class: "landImg"}));
    $ ("#createBoosterDiv").append($('<img />',{src: 'http://mythicspoiler.com/m19/cards/island1.jpg', class: "landImg"}));
    $ ("#createBoosterDiv").append($('<img />',{src: 'http://mythicspoiler.com/m19/cards/swamp1.jpg', class: "landImg"}));
    $ ("#createBoosterDiv").append($('<img />',{src: 'http://mythicspoiler.com/m19/cards/mountain1.jpg', class: "landImg"}));
    $ ("#createBoosterDiv").append($('<img />',{src: 'http://mythicspoiler.com/m19/cards/forest1.jpg', class: "landImg"}));

    $(".cardImg").click(function(){
      var deckImg = $("<img>");
      var thisImg = $(this);
      deckImg.attr("src", thisImg.attr("src"));
      deckImg.attr("class", "deckImg")
      $("#deckDiv").append(deckImg);
      $(this).remove();
     });

     $(".landImg").click(function(){
      var deckImg = $("<img>");
      var thisImg = $(this);
      deckImg.attr("src", thisImg.attr("src"));
      deckImg.attr("class", "deckImg")
      $("#deckDiv").append(deckImg);
     });

    $("#deckDiv").empty();
  }) //Fim do Selado!
  //Inicio scroll up
  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
//Fim scroll up

// Final da ready function
});