class Question {
    constructor() {
      this.title = createElement('h2')
      this.input1 = createInput("Enter your name here");
      this.input2 = createInput("Enter correct option")
      this.button = createButton('Submit');
      this.button2 = createButton('Reset')
      this.question  = createElement("h3")
      this.option1 = createElement("h4")
      this.option2 = createElement("h4")
      this.option3 = createElement("h4")
      this.option4 = createElement("h4")
      this.greeting = createElement('h3');

    }
  hide() {
    this.greeting.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    this.title.hide();
  }
  hide2() {
      this.question.hide()
      this.option1.hide()
      this.option2.hide()
      this.option3.hide()
      this.option4.hide()
  }
  
    display(){
      
      this.title.html("My Quiz Game");
      this.title.position(130, 0);
      
      this.question.html("Question - What starts and ends with letter 'E', but has only one letter ? ");
      this.question.position(130,130)

      this.option1.html("1:Envelope")
      this.option1.position(130,150)

      this.option2.html("2:Everyone")
      this.option2.position(270,150)

      this.option3.html("3:Energise")
      this.option3.position(130,170)

      this.option4.html("4:Exercise")
      this.option4.position(270,170)



      this.input1.position(130, 220);
      this.input2.position(130, 250);
      

      this.button.position(260, 300);
      this.button2.position(800,380)
  
      this.button.mousePressed(()=> {
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        

        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update()
        contestant.updateCount(contestantCount);
        
        this.greeting.html("Hello " + contestant.name )
        this.greeting.position(130, 300)
      });

      this.button2.mousePressed(()=> {
        contestant.updateCount(0);
        quiz.update(0)
      })
    }
  }
  