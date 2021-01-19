let PIXI = require('pixi.js');
let SceneManager = require('./SceneManager.engine');

class World{
    constructor(app,name){
        this.app = app;
        this.name = name;
        this.sceneManagers = [];
    }
    Update(offset){

    }

    CreateSceneManager(name,entities,objects){
        var newSceneManager = new SceneManager(this.app,name,entities,objects);
        this.sceneManagers.push(newSceneManager);

        return newSceneManager;
    }

    SaveSceneManagerByName(name){

    }

    SaveSceneManagerByIndex(index){
        
    }

    LoadSceneManager(index){
        var LoadedSceneManager = this.sceneManagers[index];

        return LoadedSceneManager;
    }

    FindSceneManagerByName(name){
        for(var i = 0; i < this.sceneManagers.length; i++){
            if(this.sceneManagers[i].name == name){
                return this.sceneManagers[i];
            }
        }

        return null;
    }


}

module.exports = World;