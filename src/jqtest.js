$(document).ready(function(){

  function createImage(index, boosterCards){
    var imgName = $("<img>").attr({
      "src" : boosterCards[index].source
    });

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
  var pool = [];

  $("#generateBooster").click(()=>{
    booster1 = generateBooster(m19);
    booster2 = generateBooster(m19);
    booster3 = generateBooster(m19);
    booster4 = generateBooster(m19);
    booster5 = generateBooster(m19);
    booster6 = generateBooster(m19);
    pool = pool.concat(booster1);
    pool = pool.concat(booster2);
    pool = pool.concat(booster3);
    pool = pool.concat(booster4);
    pool = pool.concat(booster5);
    pool = pool.concat(booster6);
  })

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
    }
  }

  function getQuantityCost(card) {
    return card.cost.length;
  }

  $("#colors").click(()=>{
    $("#createBoosterDiv").children().remove();
    pool.sort((firstCard, secondCard) => {
      return (colorToNumber(firstCard) + getQuantityCost(firstCard)) -
             (colorToNumber(secondCard) + getQuantityCost(secondCard));
    });

    for (var i = 0; i < pool.length; i++)
    {
      $("#createBoosterDiv").append(createImage(i, pool));
    }
  })

// Final da ready function
});