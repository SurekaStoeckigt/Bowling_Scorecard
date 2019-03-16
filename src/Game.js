function Game() {

this._frames = [];
this._currentFrameNumber = 1;
frame = new Frame();
this._currentBowl = 1;
};

Game.prototype.start = function() {
    for (var i = 0; i < 10; i++) {
        frame = new Frame();
        this._frames.push(frame);
    }
};

Game.prototype.getTotalScore = function(){
  this._totalScoreForGame = 0;
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
    this.updateFrameNumber(frame);
  };

Game.prototype.updateFrameNumber = function(frame){

  if((this._currentBowl=== 1) && (frame._secondBowlAllowed === true)) {
    this._currentBowl = 2;

  // } else if ((this._currentBowl=== 2)  {
  //   this._currentBowl = 3;
  } else { //strike
    this._currentFrameNumber+=1;
    this._currentBowl = 1;

    //this._currentBowl == 1 && secondBowlNotAllowed
  } ;

  // } else if (this._currentBowl ===  2) {
  //   this._currentFrameNumber+=1;
  //   this._currentBowl = 1;
  //
  // } else {


  };

Game.prototype.resetFrameScore = function(){
  frame = this._frames[this._currentFrameNumber];
  frame._pinsHitOnBowl1 = 0;
};
