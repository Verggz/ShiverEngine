let PIXI = require('pixi.js');
let Camera = require('./Camera.engine');

class CinematicCamera extends Camera{
    constructor(app,entities,world){
        super(app,entities[0],world);

    }

    ChangeSprite(index){

    }
}

module.exports = CinematicCamera;

