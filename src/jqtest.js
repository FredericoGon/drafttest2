$(document).ready(function(){
  //   Teste com a Array mais complexa

  // Fazer uma função com tudo necessário para criar a carta
  // Ainda não está funcionando, então não estou usando essa Function em lugar nenhum

  // Função para gerar imagem

  function createImage(index, boosterCards){
    var imgName = $("<img>").attr({
      "src" : boosterCards[index].source
    });

    return imgName;
    //$("#createBoosterDiv").append(imgName);
  }

  //Código para gerar uma nova array com o Booster

  function selectCards(cardRarity, cardCount) {
    //Array com todas as Uncommon
    var cardsFilteredByRarity = arrayTest.filter(carta => carta.rarity == cardRarity);
    var cardsSelected = [];
    var totalCardsPosibility = cardsFilteredByRarity.length;

    while(cardsSelected.length != cardCount){ // Mandando gerar cartas até chegar à 4 cartas no booster

      var cardIndex = Math.floor((Math.random() * totalCardsPosibility)); // randomizando as próximas cartas
      var selectedCard = cardsFilteredByRarity[cardIndex];

      while(cardsSelected.find(carta => carta.name == selectedCard.name)){ //compara
        cardIndex = Math.floor((Math.random() * totalCardsPosibility));
        selectedCard = cardsFilteredByRarity[cardIndex];
      }

      cardsSelected.push(selectedCard);
    }

    return cardsSelected;
  }

  var booster = [];

  $("#generateBooster").click(()=>{
    booster = [];
    var cardRare =      selectCards('rare',     1);
    var cardsUncommon = selectCards('uncommon', 3);
    var cardsCommon =   selectCards('common',   10);
    var cardLand =      selectCards('lcommon',  1);

    var poolDeBoosters = []
    poolDeBoosters.push(booster)

    booster = booster.concat(cardRare);
    booster = booster.concat(cardsUncommon);
    booster = booster.concat(cardsCommon);
    booster = booster.concat(cardLand);

    for (var i = 0; i < booster.length; i++)
    {
      $("#createBoosterDiv").append(createImage(i, booster));
    }

  })



// Teste para organizar as cores

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
      default:
        return 700;
    }
  }

  function getQuantityCost(card) {
    return card.cost.length;
  }

  $("#colors").click(()=>{
    $("#createBoosterDiv").children().remove();
    booster.sort((firstCard, secondCard) => {
      return (colorToNumber(firstCard) + getQuantityCost(firstCard)) -
             (colorToNumber(secondCard) + getQuantityCost(secondCard));
    });

    for (var i = 0; i < booster.length; i++)
    {
      $("#createBoosterDiv").append(createImage(i, booster));
    }
  })




// Final da ready function
});