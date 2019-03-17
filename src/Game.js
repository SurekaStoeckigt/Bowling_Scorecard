function Game() {
  this._frames = [];
  this._currentFrameNumber = 1;
  this._numberOfFrames = 10;
  this._frames.push(new Frame(false))

};


Game.prototype.getTotalScore = function(){
  var perfect_game = true;
  var totalScoreForGame = 0;
  for (var i = 0; i < this._frames.length; i ++) {
    totalScoreForGame += this._frames[i].totalScoreForFrame();
    perfect_game = (perfect_game) && (this._frames[i]._strike);
  };

  perfect_game = perfect_game && (this._frames[this._frames.length-1].totalScoreForFrame() === 30)

  if (perfect_game && this._frames.length >= 10) {
   totalScoreForGame = 300;
  };
 return totalScoreForGame
};

Game.prototype.roll = function(pins_hit){

  var frame = this._frames[this._frames.length-1];
  if(!frame._done) {
    frame.roll(pins_hit)
  };

  if (this._frames.length > 1) {
    if (this._frames[this._frames.length-2]._spare) {
        this._frames[this._frames.length-2]._bonusScore = frame._frameRoll1Score;
    }
    if (this._frames[this._frames.length-2]._strike && frame._done) {
        this._frames[this._frames.length-2]._bonusScore = frame._frameRoll1Score + frame._frameRoll2Score;
    }
  }

  if (frame._done) {
    if (this._currentFrameNumber <= 9) {
      this._currentFrameNumber += 1;
      this._frames.push(new Frame(this._currentFrameNumber === 10));
    }
  };
};
