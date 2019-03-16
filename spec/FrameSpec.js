describe('Frame', function(){

  beforeEach(function(){
    frame = new Frame(false);
  });

// scenario : sum of scores
  it('starts with a total score of 0 for each frame', function(){
    expect(frame.totalScoreForFrame()).toEqual(0);
  });

  it('keeps score of first bowl for frame', function(){
    frame.roll(2);
    expect(frame.totalScoreForFrame()).toEqual(2);
  });

  it('sums the total of two bowls for the frame when no bonuses are expected', function(){
    frame.roll(2);
    frame.roll(2);
    frame.totalScoreForFrame();
    expect(frame.totalScoreForFrame()).toEqual(4);
  });
  // bowl number
  it('starts with the first roll of the frame', function(){
    expect(frame._first).toEqual(true);
  });

  it('can move to the second roll of the frame ', function(){
    frame.roll(2);
    expect(frame._first).toEqual(false);
  });

  // strikes
  it('knows when a strike is not bowled', function(){
    expect(frame._strike).toEqual(false);
  });

  it('knows when a strike is not bowled', function(){
    frame.roll(2);
    expect(frame._strike).toEqual(false);
  });

  it('knows when a strike is bowled', function(){
    frame.roll(10);
    expect(frame._strike).toEqual(true);
  });

//frame is finished
  it('allows a second bowl for the frame if no strike is bowled on the first roll', function(){
    frame.roll(2);
    expect(frame._done).toEqual(false);
  });

  it('ends the frame if a strike is rolled', function(){
    frame.roll(10);
    expect(frame._done).toEqual(true);
  });

  it('ends a frame after two rolls if no strike is rolled', function(){
    frame.roll(2);
    frame.roll(2);
    expect(frame._done).toEqual(true);
  });

  //bonus scores
  it('does not allow bonus scores on initialization', function(){
    expect(frame._bonusAllowed).toEqual(false);
  });

  it('does not allow a bonus score if no strike is rolled', function(){
    frame.roll(2);
    expect(frame._bonusAllowed).toEqual(false);
  });

  // it('allows bonus score if a strike is rolled', function(){
  //   frame.roll(10);
  //   expect(frame._bonusAllowed).toEqual(true);
  // });
});
