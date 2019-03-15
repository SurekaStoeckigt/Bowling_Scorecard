function Game() {
this._frames = this.start();
this._currentFrameNumber = 1;
frame = new Frame();
this._totalScoreForGame = 0;
this._currentBowl = 1;
};


Game.prototype.start = function() {
    array = []
    for (var i = 0; i < 10; i++) {
        frame = new Frame(false);
        array.push(frame);
    }
    return array;
};

Game.prototype.getTotalScore = function(){
  for (var i = 0; i < this._frames.length; i ++) {
    this._totalScoreForGame += this._frames[i].totalScoreForFrame();
  }
  return this._totalScoreForGame;

};

Game.prototype.roll = function(pins_hit){
  frame = this._frames[this._currentFrameNumber];
  if (this._currentBowl === 1){
    frame.firstRoll(pins_hit);
  } else if (this._currentBowl === 2) {
    frame.secondRoll(pins_hit);
  } else {
    frame.thirdRoll(pins_hit)
  }
    this.updateFrameNumber();
    // this.resetFrameScore();
  };

Game.prototype.updateFrameNumber = function(){

  if(this._currentBowl== 1){
    this._currentBowl = 2;
  } else {

  // } else if (this._currentBowl ===  2) {
  //   this._currentFrameNumber+=1;
  //   this._currentBowl = 1;
  //
  // } else {
    this._currentFrameNumber+=1;
    this._currentBowl = 1;
    // frame = this._frames[this._currentFrameNumber];
    // this._frames[this._currentFrameNumber][0] = 0;
  }

};

Game.prototype.resetFrameScore = function(){
  frame = this._frames[this._currentFrameNumber];
  frame._pinsHitOnBowl1 = 0;
  frame._pinsHitOnBowl1 = 0;
};
//
//   } else {
//     frame.thirdRoll(pins_hit)
  // };
