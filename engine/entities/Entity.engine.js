let PIXI = require('pixi.js');

let GameObject = require('./GameObject.engine');

class Entity extends GameObject{
    constructor(app,speed){
        super(app);
        this.speed = speed;
    }

    Update(){
        
    }
}

module.exports = Entity;