// ////////////////////////////
// //BEGINNING OF GAME
// ///////////////////////////
$(document).ready(function(){
  page.init();
});

var page = {
  init: function(){
    page.styling();
    page.events();
},

  styling: function () {
    page.charPull();
    page.paddlePull();
  },

  events: function () {
    $('.info-container').on('click', page.selectChar);
    $('.paddle-info-container').on('click', page.selectPaddle);
  },

///////////////////////////////
/////GETTING PLAYER INFO
//////////////////////////////

charPull: function (){ //pulling Player info and displaying on page
  var tmpl = _.template(templates.charDisplayTemplate);
  charChoice.forEach(function(el){
    $('.players-container').append(tmpl(el));
  });
},

selectChar: function (event) { //getting player id and hiding first section
    event.preventDefault();
    var selectedCharacter = ($(this).attr('id'));
    console.log ("selected player:", selectedCharacter);
    $('.player-selection').addClass('inactive');
    $('.paddle-selection').removeClass('inactive');
},

///////////////////////////////
/////GETTING PADDLE INFO
//////////////////////////////

paddlePull: function () {
  var tmpl = _.template(templates.paddleDisplayTemplate);
  paddleChoice.forEach(function (el) {
    $('.paddles-container').append(tmpl(el));
});
},

selectPaddle: function (event) {
  event.preventDefault();
  var selectedPaddle = ($(this).attr('id'));
  console.log("selected paddle: ",selectedPaddle);
  $('.player-selection').addClass('inactive');
  $('.paddle-selection').addClass('inactive');
  $('.location-selection').removeClass('inactive');
}

}; //end of page object
