function Game() {

this._frames = [];
this._currentFrameNumber = 1;
this._totalScoreForGame = 0;
this._numberOfFrames = 10;
this._frames.push(new Frame(false))
};


Game.prototype.getTotalScore = function(){
  for (var i = 0; i < this._frames.length; i ++) {
    this._totalScoreForGame += this._frames[i].totalScoreForFrame();
  }
  return this._totalScoreForGame;

};

Game.prototype.roll = function(pins_hit){

  var frame = this._frames[this._frames.length-1];
  if(!frame._done) {
    frame.roll(pins_hit)
  };

  if (frame._done) {
    if (this._frames.length >= 2) {
      var strike_or_spare = this._frames[this._frames.length-2]._strike || frame._strike || frame._spare; //true or false
    } else {
      var strike_or_spare = frame._strike || frame._spare; // true or false

    }
    this._currentFrameNumber += 1;
    this._frames.push(new Frame(strike_or_spare));
  };
};
