class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Start Game');
        this.index = 0;
    }

    display() {
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.input.position(135,300);
        this.button.style('width', '80px');
        this.button.style('height', '40px');
        this.button.style('background', 'orange');
        this.button.position(200,400);
        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide(); 
            player.getCount();
            playerCount+=1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();
            player.name = this.input.value();
            gameState = "level1";
        });
    }
}