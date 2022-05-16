class Quiz {
    constructor(){}


    getState(){
        var gameStateRef = database.ref('GameState')
        gameStateRef.on("value",function(data){
            gameState = data.val()
        })
    }

    update(state){
        database.ref('/').update({
            GameState : state
        })

    }

    async start(){
        if(gameState === 0){
         contestant = new Contestant()
         var contestantCountRef = await database.ref('ContestantCount').once("value");
         if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val()
            contestant.getCount()
         }
        question = new Question()
        question.display();
        }
      }

      play(){
          background("Indigo")
        push()
          textSize(30);
          fill('pink')
          text("Result of the quiz :- ",130,120 )
          pop()
          push()
          textSize(20)
          fill('green')
          text("Winners highlighted in green", 300,360)
          pop()
          textSize(20)
          Contestant.getPlayerInfo();
          if(allContestants !== undefined){
              var displayAnswer = 140

              for(var plr in allContestants) {
                  var correctAnswer = "1"
                  if(correctAnswer === allContestants[plr].answer) {
                      fill("green")

                      push()
                      textSize(20)
                      fill('yellow')
                      text("Congratulations to the winner(s) !!!", 300,330)
                      pop()
                  }
                  else {
                      fill("red")
                  }
                  displayAnswer+= 30
                  text(allContestants[plr].name + " : " + allContestants[plr].answer,120,displayAnswer)
              }
          }
      }






}