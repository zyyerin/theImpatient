var canvas;
const PATH = 'assets/data/';

let rand = ['#000', '#111', '#222', '#333', '#444', '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc', '#ddd', '#eee', '#fff'];
let cardNum = 22;

$(document).ready(function() {

  for (let i = 0; i < cardNum; i++) {
    let $div = $("<div>", {
      id: "generatedCard" + i,
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
    $('#generatedCard' + i)
      .addClass("cardFlip")
      .css({
          "opacity": 0.5,
          "background-color": color,
          "background-image": imgUrl,
          "background-size": "cover",
          "background-position": "center",
          "background-repeat": "no-repeat",
          "order": cardOrder
      });
  };

  // select a random card
  $('#generatedCard' + Math.floor(Math.random()) * cardNum).css({
    "background-color": "#aff"
  });

  // function markIn() {
  //   $(this)
  //     .removeClass('cardFlip')
  //           .animate({
  //             opacity: 1
  //           }, 200);
  // }
  //
  // function markOut() {
  //   $(this).addClass('cardFlip')
  //           .animate({
  //             opacity: 0.5
  //           }, 200);
  // }
  //
  // $(".cards").hoverIntent(markIn, markOut);

  $( ".questions" ).click(function() {
    $('.cards').toggleClass('cardFlip');
    // console.log( "Handler for .click() called." );
  });
});
