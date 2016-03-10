//FIRST CONSTRUCTOR
function Player (options){
  var options = options || {};
  this.name = options.name || 'UnchosenPlayerName';
  this.points = options.points || 0; //stops at 11
  this.power = options.power || 1;
  this.speed = options.speed || 1;
  this.spin = options.spin || 1;
  this.mentalStrength  = options.mentalStrength || 100;
  this.rating = this.power + this.speed + this.spin + this.mentalStrength; //adding all together
  this.shot = function (opponent) {
    opponent.pointLoss(this);
  };

  this.pointLoss = function (opponent) {
    if (opponent.paddle && !this.paddle) { //if only one player selects paddle
     var totalRatingOnePaddle = opponent.rating + opponent.paddle.paddleRating; //add paddleRating to opponent's rating
        if(totalRatingOnePaddle > this.rating) { //if paddleRating and rating is greater than other player's rating
          opponent.points = opponent.points + 1; // give them one point
          alert (opponent.name + " won the point! The score is: " + this.points + "|" + opponent.points);
          console.log ("line 21");
     }
    }
    else if (opponent.paddle && this.paddle) { //if both players select paddles
        var totalRatingOpp = opponent.rating + opponent.paddle.paddleRating;
        var totalRatingThis = this.rating + this.paddle.paddleRating;
        console.log ("Opponents", totalRatingOpp, "This", totalRatingThis);
        if(totalRatingOpp > totalRatingThis) { //if paddleRating and rating is greater than other player's rating
          opponent.points = opponent.points + 1; // give them one point
          alert (opponent.name + " won the point! The score is: " + this.points + "|" + opponent.points);
          console.log ("line 31");
     }
        else {
          this.points = this.points + 1; // this player gets point
          alert (this.name + " won the point! The score is: " + this.points + "|" + opponent.points);
          console.log ("line 36");
        }
    }
    else if (this.rating > opponent.rating) {
      this.points = this.points + 1;
      alert (this.name + " won the point! The score is: " + opponent.points + "|" + this.points);
      console.log ("line 42");
    }
    else {
      opponent.points = opponent.points + 1;
      alert (this.name + " lost the point! The score is: " + opponent.points + "|" + this.points);
      console.log ("line 47");
      }
  }; //end of pointLoss function


  if (this.rating > 10) {
    alert("recalculate " + this.name + " attributes so that total for 'Rating' is 10. Right now the total is " + this.rating + ".");
  }

this.paddleChoice = function (name, strength, spin) {
  this.paddle = new Paddle ({
    name: name,
    strength: strength,
    spin: spin});
};

} //END OF FIRST CONSTRUCTOR

//SECOND CONSTRUCTOR
function Paddle (options) {
  var options = options || {};
  this.name = options.name || "Unchosen Paddle Name";
  this.paddleStrength = options.strength || 1;
  this.paddleSpin = options.spin || 1;
  this.paddleRating = this.paddleStrength + this.paddleSpin;

  if (this.paddleRating > 10) {
    alert("recalculate '" + this.name + "' attributes so that total for 'Rating' is 10. Right now the total is " + this.paddleRating + ".");
  }
}

//THIRD CONSTRUCTOR
function Location (options) {
  var options = options || {};
  this.randomDistractionLevel = function () {
    var random = Math.floor(Math.random() * 10 + 1);
    return random + this.setDistractionLevel;
    };
  this.name = options.name;
  this.setDistractionLevel = options.setDistractionLevel;
  this.totalDistractionLevel = this.setDistractionLevel + this.randomDistractionLevel();
}

//PLAYER OPTIONS

var justin = new Player ({
  name:"Justin",
  points: 0,
  power: 1,
  speed: 2,
  spin: 2,
  mentalStrength: 4});

var russ = new Player ({
  name:"Russ",
  points: 0,
  power: 3,
  speed: 3,
  spin: 2,
  mentalStrength: 2});

var nathan = new Player ({
    name:"Nathan",
    points: 0,
    power: 4,
    speed: 1,
    spin: 3,
    mentalStrength: 2});

var woody = new Player ({
    name:"Woody",
    points: 0,
    power: 1,
    speed: 0,
    spin: 2,
    mentalStrength: 6});

//PADDLE OPTIONS

var spinner = new Paddle ({
  name: "Spinner",
  strength: 2,
  spin: 7
});

var smash = new Paddle ({
  name: "Spinner",
  strength: 7,
  spin: 0
});

//LOCATION OPTIONS
var bar = new Location ({
  name: "Noisy Bar",
  setDistractionLevel: 5
});

var office = new Location ({
  name: "Office",
  setDistractionLevel: 1
});

var tiy = new Location ({
  name: "The Iron Yard",
  setDistractionLevel: 4
});

var party = new Location ({
  name: "Loud Party",
  setDistractionLevel: 6
});
