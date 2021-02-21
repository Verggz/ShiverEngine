let PIXI = require('pixi.js');

//All cutscenes are done in real time, but you can also use pre recorded cutscenes if you would prefer it
class Cutscene{
    constructor(entities = null,objects= null,positions = null,prerecorded = false,recordedScene = null){
        this.entities = entities;
        this.objects = objects;
        this.positions = positions;
        this.recordedScene = recordedScene;
    }

    CreateCutscene(){

    }

    LoadCutscene(){

    }
}

module.exports = Cutscene;