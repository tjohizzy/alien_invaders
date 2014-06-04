
  var levelData = { 
     1:  [[0,0,0,0,2,2,2,0,0,0,0],
          [0,0,0,2,0,0,0,2,0,0,0],
          [0,0,2,0,0,0,0,0,2,0,0],
          [0,2,0,1,0,0,0,1,0,2,0],
          [2,0,0,0,0,0,0,0,0,0,2],
          [2,0,0,0,0,0,0,0,0,0,2],
          [2,0,1,0,0,0,0,0,1,0,2],
          [0,2,0,1,1,1,1,1,0,2,0],
          [0,0,2,0,0,0,0,0,2,0,0],
          [0,0,0,2,0,0,0,2,0,0,0],
          [0,0,0,0,2,2,2,0,0,0,0]],
     2:  [[0,2,0,0,1,0,1,0,0,2,0],
          [0,0,0,1,0,0,0,2,0,0,0],
          [0,0,0,0,2,0,0,0,0,0,0],
          [0,0,1,0,0,0,0,0,1,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,2,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,1,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
      3: [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0]] };

  var spriteData = {
    'alien1': { sx: 0,  sy: 0,  w: 23, h: 18, cls: Alien, frames: 2 },
    'alien2': { sx: 0,  sy: 18, w: 23, h: 18, cls: Alien, frames: 2 },
    'player': { sx: 44,  sy: 53, w: 26, h: 38, cls: Player },
    'missile': { sx: 60,  sy: 91, w: 10,  h: 10, cls: Missile, frames: 2 }
  }

  function startGame() {
    var screen = new GameScreen("ImpossInvaders","press space to start",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
    Game.loop();
  }

  function endGame() {
    var screen = new GameScreen("You Lose!","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }


  function winGame() {
    var screen = new GameScreen("You Win!","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }

  $(function() {
    GameAudio.load({ 'fire' : 'media/pew2.ogg', 'die' : 'media/explosion.ogg' }, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });



