var canvas;
var contestantCount,database,quiz,question,contestant,allContestants;
var gameState = 0

function setup(){
  canvas = createCanvas(850,400); 
  database = firebase.database()
  quiz = new Quiz()
  quiz.getState()
  quiz.start()

}

function draw(){
  background("pink");
if(contestantCount === 4){
  quiz.update(1)
}
if(gameState === 1){
  quiz.play()
  question.hide2()
  question.hide()
}

  
}
