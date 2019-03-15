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
    expect(game._totalScoreForGame).toEqual(0);
  });

  it('knows which frame it is in after initialization', function(){
    game.roll(4);
    game.roll(1);
    expect(game._currentFrameNumber).toEqual(2);

  });

});
