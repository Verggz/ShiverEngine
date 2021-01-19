let PIXI = require('pixi.js');

class Scene{
    constructor(app,name,managerName,entities,objects){
        this.app = app;
        this.name = name;
        this.managerName = managerName;
        this.entities = entities;
        this.objects = objects;
    }

    Update(){
        
    }
}

module.exports = Scene;