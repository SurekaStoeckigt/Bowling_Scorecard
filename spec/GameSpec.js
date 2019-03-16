describe('game', function(){
var game;

  beforeEach(function() {
    game = new Game();
  });


  it('has 10 frames on initialization', function(){
    expect(game._numberOfFrames).toEqual(10);
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
  });

  it('adds the score for the next two frames if a strike is bowled', function(){
    game.roll(10);
    game.roll(3);
    game.roll(1);
    game.roll(1);
    game.roll(2);
    expect(game.getTotalScore()).toEqual(21);
  })

  it('adds the score for the next frame if a spare is bowled', function(){
    game.roll(7);
    game.roll(3);
    game.roll(1);
    expect(game.getTotalScore()).toEqual(11);
  })

  it('can add scores of multiple strikes and spares', function(){
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game._currentFrameNumber).toEqual(5);
    expect(game.getTotalScore()).toEqual(54);
  });

  it('can add scores of multiple strikes and spares', function(){
    game.roll(1);
    game.roll(4);
    game.roll(4);
    game.roll(5);
    game.roll(6);
    game.roll(4);
    game.roll(5);

    expect(game._currentFrameNumber).toEqual(4);
    expect(game.getTotalScore()).toEqual(29);
  });

});
