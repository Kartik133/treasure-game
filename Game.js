class Game {
    constructor() {

    }

    start() {
        buttons = new Buttons();
        buttons.display();
    }

    async start2() {
        buttons.hide();
        form = new Form();
        form.display();
        player = new Player();
        player.getCount();
    }

    play1() {
       background("green");

       cardboard1 = new MazeWall(780,0,20,600,PI/2);
       cardboard1.display();

       cardboard2 = new MazeWall(0,0,20,600,PI/2);
       cardboard2.display();

       cardboard3 = new MazeWall(0,580,340,20,PI/4);
       cardboard3.display();

       cardboard4 = new MazeWall(460,580,340,20,PI/4);
       cardboard4.display();

       cardboard5 = new MazeWall(320,520,20,80,PI/2);
       cardboard5.display();

       cardboard6 = new MazeWall(250,500,150,20,PI/4);
       cardboard6.display();

       cardboard7 = new MazeWall(250,320,20,200,PI/2);
       cardboard7.display();

       cardboard8 = new MazeWall(90,300,310,20,PI/4);
       cardboard8.display();

       cardboard9 = new MazeWall(90,300,20,100,PI/2);
       cardboard9.display();
      
       cardboard10 = new MazeWall(0,0,340,20,PI/3);
       cardboard10.display();

       cardboard11 = new MazeWall(460,0,340,20,PI/4);
       cardboard11.display();

       cardboard12 = new MazeWall(460,0,20,80,PI/4);
       cardboard12.display();

       cardboard13 = new MazeWall(210,0,20,80,PI/4);
       cardboard13.display();
       
       cardboard14 = new MazeWall(90,60,20,180,PI/4);
       cardboard14.display();

       cardboard15 = new MazeWall(90,220,250,20,PI/2);
       cardboard15.display();

       cardboard16 = new MazeWall(320,70,20,150,PI/2);
       cardboard16.display();

       cardboard17 = new MazeWall(320,70,160,20,PI/4);
       cardboard17.display();

       cardboard18 = new MazeWall(100,150,150,20,PI/4);
       cardboard18.display();

       cardboard19 = new MazeWall(560,60,20,80,PI/2);
       cardboard19.display();

       cardboard20 = new MazeWall(410,220,170,20,PI/4);
       cardboard20.display();

       cardboard21 = new MazeWall(410,120,170,20,PI/4);
       cardboard21.display();
       
       cardboard22 = new MazeWall(410,120,20,120,PI/2);
       cardboard22.display();

       cardboard23 = new MazeWall(380,300,20,80,PI/2);
       cardboard23.display();

       cardboard24 = new MazeWall(380,360,100,20,PI/4);
       cardboard24.display();

       cardboard25 = new MazeWall(480,220,20,160,PI/2);
       cardboard25.display();
       
       cardboard26 = new MazeWall(315,370,20,70,PI/2);
       cardboard26.display();

       cardboard27 = new MazeWall(315,430,165,20,PI/4);
       cardboard27.display();

       cardboard28 = new MazeWall(460,430,20,150,PI/2);
       cardboard28.display();

       cardboard29 = new MazeWall(0,460,170,20,PI/4);
       cardboard29.display();

       cardboard30 = new MazeWall(165,370,20,160,PI/2);
       cardboard30.display();

       cardboard31 = new MazeWall(650,125,130,20,PI/4);
       cardboard31.display();

       cardboard32 = new MazeWall(640,70,20,200,PI/2);
       cardboard32.display();

       cardboard33 = new MazeWall(580,310,20,210,PI/2);
       cardboard33.display();
       
       cardboard34 = new MazeWall(580,390,100,20,PI/4);
       cardboard34.display();

       cardboard35 = new MazeWall(660,390,20,130,PI/2);
       cardboard35.display();

       cardboard36 = new MazeWall(660,500,120,20,PI/4);
       cardboard36.display();

       door = createSprite(400,565);
       door.addImage("door",doorImg);
       door.scale = 0.175;

       boy = createSprite(400,30);
       boy.addImage("boy",boyImg);
       boy.scale = 0.25;
    }
}