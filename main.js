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
    if (this.rating  > opponent.rating) {
      this.points = this.points + 1;
      alert (this.name + " won the point! The score is: " + this.points + "|" + opponent.points);
      }

    else {
      opponent.points = opponent.points + 1;
      alert (this.name + " lost the point! The score is: " + opponent.points + "|" + this.points);
      if (this.points > 11) {
        alert(this.name + " won the Ping Pong match!");
      }
    }
  };

  if (this.rating > 10) {
    alert("recalculate " + this.name + " attributes so that total for 'Rating' is 10. Right now the total is " + this.rating + ".");
  }

this.paddleChoice = function (name, strength, spin) {
  this.paddle = new Paddle ({name: name, strength: strength, spin: spin});
};

} //end of 'Player'

function Paddle (options) {
  var options = options || {};
  this.name = options.name || "Unchosen Paddle Name";
  this.strength = options.strength || 1;
  this.spin = options.spin || 1;
  this.rating = this.strength + this.spin;
}

var justin = new Player ({name:"Justin", points: 0, power: 1, speed: 2, spin: 2, mentalStrength: 4});
var russ = new Player ({name:"Russ", points: 0, power: 3, speed: 4, spin: 2, mentalStrength: 1});
