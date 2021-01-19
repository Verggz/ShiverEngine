let PIXI = require('pixi.js');
let Scene = require('./Scene.engine');

class SceneManager{
    constructor(app,name,entities,objects){
        this.app = app;
        this.name = name;
        this.entities = entities;
        this.objects = objects;
        this.scenes = [];
    }

    Update(){

    }

    CreateScene(name,entities,objects){
        var newScene = new Scene(this.app,this.name,entities,objects);
        this.scenes.push(newScene);

        return newScene;
    }

    SaveSceneByName(name){

    }

    SaveSceneByIndex(index){

    }

    LoadScene(index){

    }

    FindSceneByName(name){
        for(var i = 0; i < this.scenes.length; i++){
            if(this.scenes[i].name == name){
                return this.scenes[i];
            }
        }

        return null;
    }
}

module.exports = SceneManager;