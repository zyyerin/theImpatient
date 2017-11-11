const BOX_NUM = 4;
const CARD_NUM = 10;
let quest0 = false;

$(document).ready(function() {

  // randomlize the initial layout
  for(let j=1; j<=BOX_NUM; j++){
    for(let i=1; i<=CARD_NUM; i++){
      $('.box:nth-child(' + j + ') .card:nth-child('+i+')').css('order', Math.floor(Math.random()*CARD_NUM));
    }
  }


  $('.card:not(.info)').each(function(idx) {
    $(this).css({
        "background-image": "url(assets/img/" + idx + ".jpg)",
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat"
    });
  });

// reveal cards as typing
let boxIdx, cardIdx;
  $( "html" ).keypress(function() {
    boxIdx = Math.floor(Math.random() * BOX_NUM);
    cardIdx = Math.floor(Math.random() * CARD_NUM);
    let choosenCard = '.box:nth-child('+boxIdx+') .card:not(.info):nth-child('+cardIdx+')';

    $(choosenCard)
      .css({
        'opacity': '1'
        // 'transform': 'perspective(0) rotate3d(0.1, 0, 0, 0)'
      })
      .toggleClass('cardFlip');
  });

// STAGE I
// show the title and intro
 $('.box:first-child .info:first-child')
   .css({
     'opacity': 1,
     'color': '#000'
   });
$('#quest0').click(function(){
  quest0 = true;
  alert("clicked");
});

});
