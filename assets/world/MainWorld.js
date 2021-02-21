let PIXI = require('pixi.js');
let World = require('../../engine/scene/World.engine');
let GameObject = require('../../engine/entities/GameObject.engine');

class MainWorld extends World{
    constructor(app){
        super(app,"mainworld");
        
    }

    Initalize(){
        this.CreateSceneManager("mainSceneManager");
        this.SaveSceneManagerByName("mainSceneManager");

    }

    Update(offset){
        this.app.ticker.add(function(deltaTime){
            
        });
    }
}

module.exports = MainWorld;