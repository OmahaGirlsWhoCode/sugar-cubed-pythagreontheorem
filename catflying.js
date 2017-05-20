
var wingCounter = 0;
var random = Math.random() * 100 + 1;
var xMultiplier = Math.random() * 6 + 1;
var delay = Math.random() * 7500 + 1;

 function update() {
    toybox.update();
}

var game = new Phaser.Game(640, 480, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
});
var toybox;
var settings = {
    gravity: 980,
    plugins: ["alien", "slime"],
    demoMode: true
};

var player;
var slime;

function preload() {
    toybox = new Toybox(game, settings);
    toybox.preload();
}

function create() {
  toybox.create();

   player = toybox.add.alien({
      startingX : 250,
      startingY: 100,
      color: "pink",
      jumpForce: 300,
      speed: 100,
      scale: 1.5 });

    game.time.events.loop(Math.random() * 5000 + 1, spawningSlimes, slime);

 function spawningSlimes() {
     toybox.add.slime({
         startingX : (xMultiplier * random),
         kill : deathOfSlime,
         scale : 1.5
     });
    random = Math.random() * 100 + 1;
    xMultiplier = Math.random() * 6 + 1;
    delay = Math.random() * 5000 + 1;
 }
 

function deathOfSlime() {
    wingCounter++;
    return wingCounter;
}

if(wingCounter > 10) [
  alert("You Win! (Kill the Slimes Anyway)")  
];
}
