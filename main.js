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
  this.paddle = new Paddle ({name: name, strength: strength, spin: spin});
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
function Paddle (options) {
  var options = options || {};
  
}

var justin = new Player ({name:"Justin", points: 0, power: 1, speed: 2, spin: 2, mentalStrength: 4});
var russ = new Player ({name:"Russ", points: 0, power: 3, speed: 4, spin: 2, mentalStrength: 1});
