let PIXI = require('pixi.js');
let SceneManager = require('./SceneManager.engine');
let SaveProjectManager = require('../saves/engine/SaveProjectManager.engine');

class World{
    constructor(app,name){
        this.app = app;
        this.world = new PIXI.Rectangle(app.renderer.width / 2, app.renderer.height / 2 ,app.renderer.width,app.renderer.height);
        this.name = name;
        this.sceneManagers = [];
    }
    Update(offset){
        this.app.ticker.add((deltaTime) =>{

        });
    }

    CreateSceneManager(name,entities,objects){
        var newSceneManager = new SceneManager(this.app,name,entities,objects);
        this.sceneManagers.push(newSceneManager);

        return newSceneManager;
    }

    SaveSceneManagerByName(name){
        for(var i = 0; i < this.sceneManagers.length; i++){
            if(this.sceneManagers[i].name == name){
                new SaveProjectManager().Save(this.sceneManagers[i]);
            }
        }
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