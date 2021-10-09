class Form
{
    constructor()
    {
     this.name=null

    }

    screen1()
    {
      
      var title=createElement("h2")
      title.html("The goal is to travel to all the planets in our solar system and explore them to know one interesting fact about that planet. We have to dogde obstacles like meteors, asteriods and aleins while collecting power-ups. Move left and right using the left and right arrows to dodge asteroids and meteors and press space to shoot and destroy the aleins.You have five lives per stage.")
      title.position(100,150)

      var btn1=createButton("NEXT")
      btn1.position(width-100,height-200)

      btn1.mousePressed(()=>{
        title.hide()
        btn1.hide()
        this.screen2()
       
      })
      
    }
    screen2()
    {
       
        var inp1=createInput("NAME")  
        inp1.position(width/2,70)
        this.name =inp1.value()

        var btn2=createButton("NEXT")
        btn2.position(width/2,100)

        var title1=createElement("h2")
        title1.html("You are a scientist to is determined to explore the planets in the solar system and know one interesting fact about each planet But the aliens         are trying to stop you and harm you by throwing asteroids and meteors at you.")
        title1.position(100,150)

        btn2.mousePressed(()=>{
            title1.hide()
            btn2.hide()
            inp1.hide()
            this.screen3()
           
          })

    }
    screen3()
    {
        var greeting=createElement("h2");
        greeting.html("Hello "+ this.name);
        greeting.position(width/4,30);

        var instructions=createElement("p");
        instructions.html("Press UP ARROW and DOWN ARROW , LEFT OR RIGHT ARROW");
        instructions.position(100,150);

        var btn3=createButton("GAME START")
        btn3.position(width/2,100)


        btn3.mousePressed(()=>{
            greeting.hide ()
            instructions.hide()
            btn3.hide()
            gameState="START"
           
          })


       
    }
}