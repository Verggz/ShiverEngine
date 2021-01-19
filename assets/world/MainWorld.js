let PIXI = require('pixi.js');
let World = require('../../engine/scene/World.engine');

class MainWorld extends World{
    constructor(app){
        super(app,"mainworld");
    }

    Update(offset){
        this.app.ticker.add(function(delta){
            
        });
    }
}

module.exports = MainWorld;