function Frame() {
this._frameRoll1Score = 0;
this._frameRoll2Score = 0;
this._bonusScore = 0;
this._strike = false;
this._done = false;
this._first = true;
this._spare = false;

Frame.prototype.totalScoreForFrame = function(){
  if (this._done) {
    return this._frameRoll1Score + this._frameRoll2Score + this._bonusScore;
  }
  return 0;
};

Frame.prototype.roll = function(pins_hit) {
  // frame not complete
  if (!this._done) {

    // first roll done
    if (this._first) {
        this._frameRoll1Score = pins_hit;
        this._first = false;
        if (this._frameRoll1Score >= 10) {
          this._done = true;
          this._strike = true;
        }
  // frame is complete
    } else { // frame is complete
        this._frameRoll2Score = pins_hit;
        this._done = true;
        if (this._frameRoll1Score + this._frameRoll2Score >= 10) {
          this._spare = true;
        };
    };
  };

};

};
