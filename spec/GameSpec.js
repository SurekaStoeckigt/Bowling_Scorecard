describe('game', function(){
var game;

  beforeEach(function() {
    game = new Game();
  });

// initialization
  it('has 10 frames on initialization', function(){
    expect(game._numberOfFrames).toEqual(10);
  });

  it('knows which frame it is in', function(){
    expect(game._currentFrameNumber).toEqual(1);
    expect(game.getTotalScore()).toEqual(0);
  });
// after game starts
  it('knows which frame it is in after initialization', function(){
    game.roll(4);
    game.roll(1);
    game.getTotalScore()
    expect(game._currentFrameNumber).toEqual(2);
    expect(game.getTotalScore()).toEqual(5);
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
  });

  it('does not add frame score to total score if the frame has not ended', function(){
    game.roll(1);
    game.roll(1);
    game.roll(1);
    expect(game.getTotalScore()).toEqual(2);
  });

  it('does add frame score to total score if the frame has ended', function(){
    game.roll(1);
    game.roll(1);
    game.roll(1);
    game.roll(0);
    expect(game.getTotalScore()).not.toEqual(2);
    expect(game.getTotalScore()).toEqual(3);
  });
// strike
  it('ends a frame if a strike is bowled on the first roll of a frame',function(){
    game.roll(10);
    expect(game._currentFrameNumber).toEqual(2);
  });
// bonus for strike
  it('does not add the bonus score for a strike if the following frame has not ended', function(){
    game.roll(10);
    game.roll(3);
    game.roll(1);
    game.roll(1);
    expect(game.getTotalScore()).not.toEqual(21);
  });

  it('adds the score for the next two frames if a strike is bowled', function(){
    game.roll(10);
    game.roll(3);
    game.roll(1);
    game.roll(1);
    game.roll(2);
    expect(game.getTotalScore()).toEqual(21);
  });

// bonus for spare
  it('does not add the bonus score for a spare if the following frame has not ended', function(){
    game.roll(7);
    game.roll(3);
    game.roll(1);
    expect(game.getTotalScore()).toEqual(11);
    expect(game.getTotalScore()).not.toEqual(12);
  })

  it('adds bonus score to total score if spare is bowled and the following frame has ended ', function(){
    game.roll(7);
    game.roll(3);
    game.roll(1);
    game.roll(0);
    expect(game.getTotalScore()).toEqual(12);
  })

  it('can add bonus scores of multiple strikes', function(){
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game._currentFrameNumber).toEqual(5);
    expect(game.getTotalScore()).toEqual(54);
  });
// spare
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
//spare and strike
  it('can add scores of multiple strikes and spares', function(){
    game.roll(1);
    game.roll(4);
    game.roll(4);
    game.roll(5);
    game.roll(6);
    game.roll(4);
    game.roll(5);
    game.roll(5);
    game.roll(10);
    expect(game._currentFrameNumber).toEqual(6);
    expect(game.getTotalScore()).toEqual(59);
  });

  it('can add scores of multiple strikes and spares in a full game', function(){
    game.roll(1);
    game.roll(4);
    expect(game._currentFrameNumber).toEqual(2);
    expect(game.getTotalScore()).toEqual(5);
    game.roll(4);
    game.roll(5);
    expect(game._currentFrameNumber).toEqual(3);
    expect(game.getTotalScore()).toEqual(14);
    game.roll(6);
    game.roll(4);
    expect(game._currentFrameNumber).toEqual(4);
    expect(game.getTotalScore()).toEqual(24);
    game.roll(5);
    expect(game.getTotalScore()).toEqual(29);
    game.roll(5);
    expect(game._currentFrameNumber).toEqual(5);
    expect(game.getTotalScore()).toEqual(39);
    game.roll(10);
    expect(game._currentFrameNumber).toEqual(6);
    expect(game.getTotalScore()).toEqual(59);
    game.roll(0);
    game.roll(1);
    expect(game._currentFrameNumber).toEqual(7);
    expect(game.getTotalScore()).toEqual(61);
    game.roll(7);
    game.roll(3);
    expect(game._currentFrameNumber).toEqual(8);
    expect(game.getTotalScore()).toEqual(71);
    game.roll(6);
    expect(game.getTotalScore()).toEqual(77);
    game.roll(4);
    expect(game._currentFrameNumber).toEqual(9);
    expect(game.getTotalScore()).toEqual(87);
    game.roll(10);
    expect(game._currentFrameNumber).toEqual(10);
    expect(game.getTotalScore()).toEqual(107);
    game.roll(2);
    game.roll(8);
    game.roll(6);
    expect(game._frames[game._frames.length -1]._finalFrame).toEqual(true);
    expect(game._currentFrameNumber).toEqual(10);
    expect(game.getTotalScore()).toEqual(133);
  });

  it('can add scores of multiple strikes and spares in a full game', function(){
    game.roll(10);

    game.roll(10);

    game.roll(10);

    game.roll(10);

    game.roll(10);

    game.roll(10);

    game.roll(10);

    game.roll(10);

    game.roll(10);

    game.roll(10);
    game.roll(10);
    game.roll(10);

    expect(game._currentFrameNumber).toEqual(10);
    expect(game.getTotalScore()).toEqual(300);
  });

  it('can add scores of multiple strikes and spares in a full game', function(){
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    game.roll(0);
    expect(game._currentFrameNumber).toEqual(10);
    expect(game.getTotalScore()).toEqual(0);
  });


});
