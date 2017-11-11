var canvas;
const PATH = 'assets/data/';

let rand = ['#000', '#111', '#222', '#333', '#444', '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc', '#ddd', '#eee', '#fff'];
let cardNum = 23;

$(document).ready(function() {

  for (let i = 0; i < cardNum; i++) {
    let $div = $("<div>", {
      id: "generated" + i,
      class: "cards"
    });
    $("#box").append($div);

  };

  for (let i = 0; i < cardNum; i++) {
    let color = rand[Math.ceil(Math.random() * rand.length)];
    let cardOrder = Math.floor(Math.random() * cardNum);

    // words
    // let imgUrl = "url(assets/data/words/words" + i + ".png)";

    // main
    let imgUrl = "url(assets/data/" + i + ".jpg)";
    $('#generated' + i)
      .addClass("stories cardFlip")
      .css({
          // "opacity": 0.5,
          "background-color": color,
          "background-image": imgUrl,
          "background-size": "cover",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "order": cardOrder
      });
  };

  // randomlize the sketch order
let sketchNum = 2;
  for (let i = 0; i < sketchNum; i++) {
  $('#sketch'+i).css({
    // 'background-color': 'red',
    "order": Math.floor(Math.random() * cardNum)
  });
}

  // select a random card
  $('#generated' + Math.floor(Math.random()) * cardNum).css({
    "background-color": "#aff"
  });

  // $(".cards").hoverIntent(markIn, markOut);

  let chooseCard;
  $( "html" ).keypress(function() {
    chooseCard = '#generated' + Math.floor(Math.random() * cardNum);
    $(chooseCard).toggleClass('cardFlip');
  });
});
