function Frame(bonusAllowed) {
this._frameScore = 0;
this._bonusAllowed = bonusAllowed; // from last frame (true of false)
this._strike = false;
this._done = false;
this._first = true;
this._spare = false;


Frame.prototype.totalScoreForFrame = function(){
  if (this._bonusAllowed === true)
  {
    this._frameScore = this._frameScore * 2;
  };
  return this._frameScore
};

Frame.prototype.roll = function(pins_hit) {
  // frame not complete
  if (!this._done) {
    this._frameScore = this._frameScore + pins_hit;
    // is strike
    if (this._frameScore >= 10 && this._first) {
      this._done = true;
      this._strike = true;
    };
    // frame completes on second roll second roll
    // if (!this._first) {
    //   this._done = true;
    // };
    // first roll done
    if (this._first) {
        this._first = false;
  // frame is complete
    } else { // frame is complete
      this._done = true;
      if (this._frameScore === 10) {
        this._spare = true;
      };
    };
  };

};

};
