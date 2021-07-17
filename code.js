var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var wall1 = createSprite(200, 120, 275, 3);
wall1.shapeColor = 'white';
var wall2 = createSprite(200, 260, 275, 3);
wall2.shapeColor = 'white';
var wall3 = createSprite(64, 145, 3, 50);
wall3.shapeColor = 'white';
var wall4 = createSprite(64, 235, 3, 50);
wall4.shapeColor = 'white';
var wall5 = createSprite(336, 145, 3, 50);
wall5.shapeColor = 'white';
var wall6 = createSprite(336, 235, 3, 50);
wall6.shapeColor = 'white';
var wall7 = createSprite(35.5, 170, 60, 3);
wall7.shapeColor = 'white';
var wall8 = createSprite(35.5, 210, 60, 3);
wall8.shapeColor = 'white';
var wall9 = createSprite(364.5, 170, 60, 3);
wall9.shapeColor = 'white';
var wall10 = createSprite(364.5, 210, 60, 3);
wall10.shapeColor = 'white';
var wall11 = createSprite(6, 190, 3, 42);
wall11.shapeColor = 'white';
var wall12 = createSprite(394, 190, 3, 42);
wall12.shapeColor = 'white';
var ball = createSprite(25, 200, 12, 12);
ball.shapeColor = 'lime';


var d1 = createSprite(120, 200, 9, 9);
d1.shapeColor = 'pink';
var d2 = createSprite(175, 200, 9, 9);
d2.shapeColor = 'pink';
var d3 = createSprite(230, 200, 9, 9);
d3.shapeColor = 'pink';
var d4 = createSprite(285, 200, 9, 9);
d4.shapeColor = 'pink';

var decision = prompt("Difficulty(Type 'e' for easy, 'm' for medium, 'h' for hard: )");
if(decision == 'h'){
d1.velocityY= -10;
d3.velocityY= -10;
d2.velocityY= 10;
d4.velocityY= 10;}

if(decision == 'm'){
d1.velocityY= -7;
d3.velocityY= -7;
d2.velocityY= 7;
d4.velocityY= 7;}

if(decision == 'e'){
d1.velocityY= -5;
d3.velocityY= -5;
d2.velocityY= 5;
d4.velocityY= 5;}


playSound("assets/category_background/fantasy.mp3",true);

var count = 0;
function draw() {
  background("yellow");
  drawSprites();
  d1.bounceOff(wall1);
  d1.bounceOff(wall2);
  d2.bounceOff(wall1);
  d2.bounceOff(wall2);
  d3.bounceOff(wall1);
  d3.bounceOff(wall2);
  d4.bounceOff(wall1);
  d4.bounceOff(wall2);
  
  if(keyDown("right")){
    ball.x = ball.x + 2;
  }
  if(keyDown("left")){
    ball.x = ball.x - 2;
  }
  if(ball.isTouching(d1)){
    ball.x = 25;
    count = count+1;
  }
  if(ball.isTouching(d2)){
    ball.x=25;
    count = count+1;

  }
  if(ball.isTouching(d3)){
    ball.x = 25;
    count = count+1;
  }
  if(ball.isTouching(d4)){
    ball.x = 25;
    count = count+1;
  }
  if(ball.isTouching(wall11)){
    ball.x = 25;
  }
  if(ball.isTouching(wall12)){
    textSize(15);
    text('You Win', 170, 200);
    ball.x = 390;
    d1.velocityY= 0;
    d3.velocityY= 0;
    d2.velocityY= 0;
    d4.velocityY= 0;
    
  }
  if(count==5){
    textSize(15);
    text('You Lose', 170, 200);
    d1.velocityY= 0;
    d3.velocityY= 0;
    d2.velocityY= 0;
    d4.velocityY= 0;
  }
  text('Deaths: '+count, 50, 25);
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
