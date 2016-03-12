////////////////////////////
//FIRST CONSTRUCTOR
///////////////////////////

function Player(options) {
  var options = options || {};
  this.name = options.name || "Richard Head";
  this.id = options.id;
  this.points = 0;
  this.energy = 10;
  this.forehand = options.forehand;
  this.backhand = options.backhand;
  this.serve = options.serve;
  this.mentalStrength = options.mentalStrength;
  this.img = options.img;
  this.rating = this.forehand + this.backhand + this.serve + this.mentalStrength;
}

Player.prototype.paddleSelection = function (name){
  this.paddle = name;
};

Player.prototype.locationSelection = function (name) {
  this.location = name;
};

// Player.prototype.pointPlay = function (opponent) {
//   if (opponent.paddle && opponent.location) {
//     if ()
//   }
// };

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
  this.id = options.id;
  this.img = options.img;
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
  this.id = options.id;
  this.img = options.img;
}

////////////////////////////
//PLAYER OPTIONS
///////////////////////////
var russPlayer = new Player({
    name: "Russ",
    id: 'russPlayer',
    forehand: 4,
    backhand: 2,
    serve: 2,
    mentalStrength: 1,
    img: "images/russ.jpg"
});

var justinPlayer = new Player({
    name: "Justin",
    id: 'justinPlayer',
    forehand: 3,
    backhand: 1,
    serve: 1,
    mentalStrength: 4,
    img: "images/justin.png"
});

var weesiePlayer = new Player({
    name: "Weesie",
    id: 'weesiePlayer',
    forehand: 3,
    backhand: 3,
    serve: 0,
    mentalStrength: 3,
    img: "images/weesie.jpg"
});

var dinaPlayer = new Player({
    name: "Dina",
    id: 'dinaPlayer',
    forehand: 6,
    backhand: 0,
    serve: 2,
    mentalStrength: 1,
    img: "images/dina.jpg"
});

var charChoice = [
  russPlayer,
  justinPlayer,
  dinaPlayer,
  weesiePlayer
];

////////////////////////////
//LOCATION OPTIONS
///////////////////////////

var barLocal = new Location({
    name: "Noisy Bar",
    id: 'barLocal',
    img: 'images/bar.jpg',
    setDistractionLevel: 5
});

var officeLocal = new Location({
    name: "Office",
    id: 'officeLocal',
    img: 'images/bar.jpg',
    setDistractionLevel: 1
});

var tiyLocal = new Location({
    name: "The Iron Yard",
    id: 'tiyLocal',
    img: 'images/bar.jpg',
    setDistractionLevel: 3
});

var partyLocal = new Location({
    name: "Loud Party",
    id: 'partyLocal',
    img: 'images/bar.jpg',
    setDistractionLevel: 6
});

var locationChoice = [
barLocal,
officeLocal,
tiyLocal,
partyLocal
];

////////////////////////////
//PADDLE OPTIONS
///////////////////////////


var spinnerPaddle = new Paddle ({
  name: "Spinner",
  id: 'spinnerPaddle',
  img: 'images/paddle.jpg',
  spin: 7,
  power: 1,
});

var smashPaddle = new Paddle ({
  name: "Smash",
  img: 'images/paddle.jpg',
  id: 'smashPaddle',
  spin: 1,
  power: 8,
});

var allRoundPaddle = new Paddle ({
  name: "All-Rounder",
  img: 'images/paddle.jpg',
  id: 'allRoundPaddle',
  spin: 4,
  power: 4,
});

var paddleChoice = [
  spinnerPaddle,
  smashPaddle,
  allRoundPaddle,
];
