let fs = require('fs');

let SceneManager = require('../../scene/SceneManager.engine');
let Scene = require('../../scene/Scene.engine');

class SaveProjectManager{
    constructor(){
        
    }

    Save(sceneManager = null,scene = null){

        if(sceneManager !== null && scene !== null){
            this.savedScene = JSON.stringify(scene);
            fs.writeFileSync('./assets/saves/scenes' + scene.name + ".json",this.savedScene);

            this.savedSceneManager = JSON.stringify(sceneManager);
            fs.writeFileSync('./assets/saves/scenemanagers/' + sceneManager.name +".json",this.savedSceneManager);
            return true;
        }
        else if(sceneManager !== null){
            this.savedSceneManager = JSON.stringify(sceneManager);
            fs.writeFileSync('./assets/saves/scenemanagers/' + sceneManager.name +".json",this.savedSceneManager);

            return true;
        }

        else if(this.savedScene !== null){
            this.savedScene = JSON.stringify(scene);
            fs.writeFileSync('./assets/saves/scenes' + scene.name + ".json",this.savedScene);

            return true;
        }

        return false;
    }

    Load(world,scene = null,sceneManager = null){
        try{
            if(sceneManager !== null && scene !== null){
                world.sceneManagers.push(new SceneManager())
            }
            
        }catch(e){
            console.log(e);
        }
    }

    LoadScene(name){

    }

    LoadSceneManager(name){

    }

    LoadAllScenes(){

    }

    LoadAllSceneManagers(){

    }

    CreateBackup(){

    }
}

module.exports = SaveProjectManager;