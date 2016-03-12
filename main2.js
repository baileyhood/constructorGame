///////////////////////////////
/////BEGINNING OF GAME
//////////////////////////////
$(document).ready(function(){
  page.init();
});

var selectedCharacter = "";  //TRY TO NOT MAKE THIS A GLOBAL VARIABLE
var selectedPaddle = "";
var selectedLocation = "";

var page = {
  init: function(){
    page.styling();
    page.events();
},

  styling: function () {
    page.charPull();
    page.paddlePull();
    page.locationPull();
    page.opponentPull();
  },

  events: function () {
    $('.info-container').on('click', page.selectChar);
    $('.paddle-info-container').on('click', page.selectPaddle);
    $('.location-info-container').on('click', page.selectLocation);
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
    selectedCharacter = ($(this).attr('id'));
    console.log ("selected player:", selectedCharacter);
    $('.player-selection').addClass('inactive');
    $('.paddle-selection').removeClass('inactive');
    $('.selection-info-container').append("Chosen Player: " + ($(this).attr('rel')));
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
  selectedPaddle = ($(this).attr('id'));
  console.log("selected paddle: ",selectedPaddle);
  page.assignPaddle();
  $('.player-selection').addClass('inactive');
  $('.paddle-selection').addClass('inactive');
  $('.location-selection').removeClass('inactive');
  $('.selection-info-container').append("Chosen Paddle: " + ($(this).attr('rel')));

},

///////////////////////////////
/////GETTING LOCATION INFO
//////////////////////////////

locationPull: function () {
  var tmpl = _.template(templates.locationDisplayTemplate);
  locationChoice.forEach(function(el){
    $('.locations-container').append(tmpl(el));
  });
},

selectLocation: function (event) {
  event.preventDefault();
  selectedLocation = ($(this).attr('id'));
  console.log("selected local: ",selectedLocation);
  page.assignLocation();
  $('.selection-info-container').append("Chosen Location: " + ($(this).attr('rel')));
  $('.location-selection').addClass('inactive');
  $('.opponent-selection').removeClass('inactive');
},


////////////////////////////////////////////
/////ASSIGNING PADDLE AND LOCATION TO PLAYER
////////////////////////////////////////////

assignPaddle: function () {
  charChoice[selectedCharacter].paddleSelection (paddleChoice[selectedPaddle]);
},
assignLocation: function () {
  charChoice[selectedCharacter].locationSelection (locationChoice[selectedLocation]);
},

///////////////////////////////
/////GETTING OPPONENT INFO
//////////////////////////////

opponentPull : function () {
  var opponentArr = charChoice.filter(function(el){
    return Number(selectedCharacter) !== el.id;
  });
  var tmpl = _.template(templates.locationDisplayTemplate);
  opponentArr.forEach(function(el){
    $('.opponent-container').append(tmpl(el));
});
}


}; //end of page object
