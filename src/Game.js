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
      var strike = this._frames[this._frames.length-2]._strike || frame._strike; //true or false
    } else {
      var strike = frame._strike; // true or false
    }
    this._currentFrameNumber += 1;
    this._frames.push(new Frame(strike));
  };
};
