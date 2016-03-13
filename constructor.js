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
  this.forehand = this.forehand + this.paddle.control;
  this.backhand = this.backhand + this.paddle.control;
  this.energy = this.energy + this.paddle.power;
};

Player.prototype.locationSelection = function (name) {
  this.location = name;
};


Player.prototype.forehandStroke = function (opponent) {
var randomStrokeNum = Math.floor(Math.random() * 6) + 1;
console.log ("This is randomstroke num: ", randomStrokeNum);
if (randomStrokeNum < this.forehand) {
       if (this.energy < 1) {
         opponent.points = opponent.points + 1;
         this.energy  = 10;
         opponent.energy = 10;

       }
       else if (opponent.energy < 1  ) {
         this.points = this.points + 1;
         this.energy  = 10;
         opponent.energy = 10;
       }
       else {
         opponent.energy =  opponent.energy - this.forehand;
       }
    }
  else {
    console.log (this.name , "Missed the shot! Random number was: " ,randomStrokeNum);
    opponent.points = opponent.points + 1;
    this.energy  = 10;
    opponent.energy = 10;
  }
};

Player.prototype.backhandStroke = function (opponent) {
  var randomStrokeNum = Math.floor(Math.random() * 6) + 1;
  console.log ("This is randomstroke num: ", randomStrokeNum);
  if (randomStrokeNum < this.backhand) {
       if (this.energy < 1) {
         opponent.points = opponent.points + 1;
         this.energy  = 10;
         opponent.energy = 10;

       }
       else if (opponent.energy < 1  ) {
         this.points = this.points + 1;
         this.energy  = 10;
         opponent.energy = 10;
       }
       else {
         opponent.energy =  opponent.energy - this.backhand;
       }
  }
  else {
    console.log (this.name , "Missed the shot!");
    opponent.points = opponent.points + 1;
    this.energy  = 10;
    opponent.energy = 10;
  }
};

Player.prototype.returnShot = function (opponent) {
  var randomNum = Math.floor(Math.random() * 2) + 1;
  if (randomNum === 1) {
    this.forehandStroke(opponent);
    console.log ("Opponent made a return forehand stroke");
  }
  if (randomNum === 2) {
    this.backhandStroke(opponent);
    console.log ("Opponent made a return backhand stroke");
  }
};

Player.prototype.gameOver = function (opponent) {
  if (this.points > 10 || opponent.points > 10) {
    console.log ("GAME OVER!");
    $('.stroke-section').addClass('inactive');
    $('.return-stroke-section').addClass ('inactive');
    $('.game-over-section').removeClass('inactive');
  }
};

////////////////////////////
//SECOND CONSTRUCTOR
///////////////////////////

function Location (options) {
  var options = options || {};
  this.randomDistractionLevel = function() {
      var random = function () {return Math.round(Math.random() * (1 - 5) + 1);};
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
  this.control = options.control;
  this.power = options.power;
  this.id = options.id;
  this.img = options.img;
}

////////////////////////////
//PLAYER OPTIONS
///////////////////////////
var russPlayer = new Player({
    name: "Russ",
    id: 0,
    forehand: 4,
    backhand: 2,
    serve: 2,
    mentalStrength: 1,
    img: "images/russ.jpg"
});

var justinPlayer = new Player({
    name: "Justin",
    id: 1,
    forehand: 3,
    backhand: 1,
    serve: 1,
    mentalStrength: 4,
    img: "images/justin.png"
});

var dinaPlayer = new Player({
    name: "Dina",
    id: 2,
    forehand: 6,
    backhand: 0,
    serve: 2,
    mentalStrength: 1,
    img: "images/dina.jpg"
});

var weesiePlayer = new Player({
    name: "Weesie",
    id: 3,
    forehand: 3,
    backhand: 3,
    serve: 0,
    mentalStrength: 3,
    img: "images/weesie.jpg"
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
    id: 0,
    img: 'images/bar.jpg',
    setDistractionLevel: 5
});

var officeLocal = new Location({
    name: "Office",
    id: 1,
    img: 'images/bar.jpg',
    setDistractionLevel: 1
});

var tiyLocal = new Location({
    name: "The Iron Yard",
    id: 2,
    img: 'images/bar.jpg',
    setDistractionLevel: 3
});

var partyLocal = new Location({
    name: "Loud Party",
    id: 3,
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
  id: 0,
  img: 'images/paddle.jpg',
  control: 2,
  power: 1,
});

var smashPaddle = new Paddle ({
  name: "Smash",
  img: 'images/paddle.jpg',
  id: 1,
  control: 1,
  power: 2,
});

var allRoundPaddle = new Paddle ({
  name: "All-Rounder",
  img: 'images/paddle.jpg',
  id: 2,
  control: 1,
  power: 1,
});

var paddleChoice = [
  spinnerPaddle,
  smashPaddle,
  allRoundPaddle,
];
