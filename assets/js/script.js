const BOX_NUM = 4;
const CARD_NUM = 10;

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
      })
      .toggleClass('cardFlip');
  });

  $('input').click(function(){
    let typeScale = 1;
    $(this).keypress(function(){
      typeScale += 0.1;
      $(this).css('font-size', typeScale);
      console.log($(this).parent('div').height());
    })
  });

});
