let PIXI = require('pixi.js');

class Scene{
    constructor(app,name,managerName,entities,objects){
        this.app = app;
        this.name = name;
        this.managerName = managerName;
        this.entities = entities;
        this.objects = objects;

        this.Initalize();
    }

    Initalize(){

        this.LoadObjects();
    }

    LoadObjects(){
        //this.app.loader.add()
    }

    Update(){
        this.LoadObjects();
    }

    SetPosition(pos){
        
        return pos;
    }
}

module.exports = Scene;