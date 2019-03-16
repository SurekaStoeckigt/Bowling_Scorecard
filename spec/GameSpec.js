describe('game', function(){
var game;

  beforeEach(function() {
    game = new Game();
    game.start();
  });


  it('has 10 frames on initialization', function(){
    expect(game._frames.length).toEqual(10);
  });

  it('knows which frame it is in', function(){
    expect(game._currentFrameNumber).toEqual(1);
    expect(game.getTotalScore()).toEqual(0);
  });

  it('knows which frame it is in after initialization', function(){
    game.roll(4);
    game.roll(1);
    game.getTotalScore()
    expect(game._currentFrameNumber).toEqual(2);
    expect(game._totalScoreForGame).toEqual(5);
  });

  it('knows which frame it is in after multiple rolls', function(){
    game.roll(4);
    game.roll(1);
    game.roll(4);
    game.roll(1);
    game.roll(4);
    game.roll(1);
    game.getTotalScore();
    expect(game._currentFrameNumber).toEqual(4);
    expect(game._totalScoreForGame).toEqual(15);
  });

  it('ends a frame if a strike is bowled on the first roll of a frame',function(){
    game.roll(10);
    expect(game._currentFrameNumber).toEqual(2);
    expect(game._currentBowl).toEqual(1);
  });

});
