////////////////////////////
//FIRST CONSTRUCTOR
///////////////////////////

function Player(options) {
  var options = options || {};
  this.name = options.name || "Richard Head";
  this.points = 0;
  this.energy = 10;
  this.forehand = options.forehand;
  this.backhand = options.backhand;
  this.serve = options.serve;
  this.mentalStrength = options.mentalStrength;
  this.rating = this.forehand + this.backhand + this.serve + this.mentalStrength;
}

Player.prototype.paddleSelection = function (name){
  this.paddle = name;
};

Player.prototype.locationSelection = function (name) {
  this.location = name;
};

Player.prototype.pointPlay = function (opponent) {
  if (opponent.paddle && opponent.location) {
    if ()
  }
};

////////////////////////////
//SECOND CONSTRUCTOR
///////////////////////////

function Location (options) {
  var options = options || {};
  this.randomDistractionLevel = function() {
      var random = function () {return Math.round(Math.random() * (1 - 5) + 1)};
      return random() + this.setDistractionLevel;
  };
  this.name = options.name;
  this.setDistractionLevel = options.setDistractionLevel;
  this.totalDistractionLevel = this.setDistractionLevel + this.randomDistractionLevel();
}


////////////////////////////
//THIRD CONSTRUCTOR
///////////////////////////

function Paddle (options) {
  var options = options || {};
  this.name = options.name;
  this.spin = options.spin;
  this.power = options.power;
}

////////////////////////////
//PLAYER OPTIONS
///////////////////////////

var russPlayer = new Player({
    name: "Russ",
    forehand: 4,
    backhand: 2,
    serve: 2,
    mentalStrength: 1
});

var justinPlayer = new Player({
    name: "Justin",
    forehand: 3,
    backhand: 1,
    serve: 1,
    mentalStrength: 4
});

var weesiePlayer = new Player({
    name: "Weesie",
    forehand: 3,
    backhand: 3,
    serve: 0,
    mentalStrength: 3
});

var dinaPlayer = new Player({
    name: "Dina",
    forehand: 6,
    backhand: 0,
    serve: 2,
    mentalStrength: 1
});

////////////////////////////
//LOCATION OPTIONS
///////////////////////////

var barLocal = new Location({
    name: "Noisy Bar",
    setDistractionLevel: 5
});

var officeLocal = new Location({
    name: "Office",
    setDistractionLevel: 1
});

var tiyLocal = new Location({
    name: "The Iron Yard",
    setDistractionLevel: 3
});

var partyLocal = new Location({
    name: "Loud Party",
    setDistractionLevel: 6
});

////////////////////////////
//PADDLE OPTIONS
///////////////////////////


var spinnerPaddle = new Paddle ({
  name: "Spinner",
  spin: 7,
  power: 1,
});

var smashPaddle = new Paddle ({
  name: "Smash",
  spin: 1,
  power: 8,
});

var allRoundPaddle = new Paddle ({
  name: "All-Rounder",
  spin: 4,
  power: 4,
});

// ////////////////////////////
// //BEGINNING OF GAME
// ///////////////////////////
$(document).ready(function() {
  page.init();
});
init: function () {
},

var charChoice = [
  russPlayer, justinPlayer, dinaPlayer, weesiePlayer
];
var charPull = function (){
  charDisplay = "";
  charChoice.forEach(function(el){
    charDisplay += el.name + " ";
  });
  return charDisplay;
};

function beginGame () {
  var playerChoice = prompt("Select your player: " + charPull());
  console.log(playerChoice);
}
