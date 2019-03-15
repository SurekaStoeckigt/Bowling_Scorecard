describe('Frame', function(){

  beforeEach(function(){
    frame = new Frame();
  });

  it('starts with a total score of 0 for each frame', function(){
    expect(frame.totalScoreForFrame()).toEqual(0);
  });

  it('keeps score of first bowl for frame', function(){
    frame.firstRoll(2);
    expect(frame._pinsHitOnBowl1).toEqual(2);
  });

  it('keeps score of second bowl for frame', function(){
    frame.secondRoll(2);
    expect(frame._pinsHitOnBowl2).toEqual(2);
  });

});
