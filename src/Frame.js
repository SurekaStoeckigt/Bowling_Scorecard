function Frame() {
this._frameScore = 0;
this._pinsHitOnBowl1 = 0;
this._pinsHitOnBowl2 = 0;
this._bonusScoreExpected = 0;
this._secondBowlAllowed = false;

Frame.prototype.totalScoreForFrame = function(){
  this._frameScore = this._pinsHitOnBowl1 + this._pinsHitOnBowl2 + this._bonusScoreExpected;
  return this._frameScore;
};

Frame.prototype.firstRoll = function(pins_hit){
  this._pinsHitOnBowl1 = pins_hit;
  if (pins_hit < 10) {
    this._secondBowlAllowed = true
    } else {
      this._secondBowlAllowed = false
    }
  };


Frame.prototype.secondRoll = function(pins_hit){
  this._pinsHitOnBowl2 = pins_hit;
};

};
