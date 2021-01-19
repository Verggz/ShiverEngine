let PIXI = require("pixi.js"); 

class GameObject{
    constructor(app){
        this.app = app;
        this.position = new PIXI.Point(0,0);
    }

    Draw(){
        this.app.ticker.add((req) =>{

        });
    }
}

module.exports = GameObject;