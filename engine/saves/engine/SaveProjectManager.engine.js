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

            this.savedSceneManager = sceneManager;
            fs.writeFileSync('./assets/saves/scenemanagers/' + sceneManager.name +".json",this.savedSceneManager);
            return {scene:this.savedScene,sceneManager:this.savedSceneManager};
        }
        else if(sceneManager !== null){
            var allScenes = [];
            var entityObjs  =[];
            var gameObjs = [];

            for(var i = 0; i < sceneManager.scenes.length; i++){
                allScenes.push(this.SaveScene(i,sceneManager.scenes[i]));
            }

            for(var i = 0; i < sceneManager.entities.length; i++){
                entityObjs.push({pos: {x:sceneManager.entities[i].pos.x,y:sceneManager.entities[i].pos.y},
                    width: sceneManager.entities[i].width,
                    height: sceneManager.entities[i].height});
            }
            for(var i = 0; i < sceneManager.objects.length; i++){
                gameObjs.push({pos: {x:sceneManager.objects[i].pos.x,y:sceneManager.objects[i].pos.y},width: sceneManager.objects[i].width,height:sceneManager.objects[i].height});
            }
            this.savedSceneManager = {name:sceneManager.name,entities:entityObjs,objects: gameObjs,scenes:allScenes};

            fs.writeFileSync('./assets/saves/scenemanagers/' + sceneManager.name +".json",JSON.stringify(this.savedSceneManager));

            return this.savedSceneManager;
        }

        else if(this.savedScene !== null){
            this.savedScene = JSON.stringify(scene);
            fs.writeFileSync('./assets/saves/scenes' + scene.name + ".json",this.savedScene);

            return true;
        }

        return false;
    }

    SaveScene(index,scene){
        var entityObjs = [];
        var gameObjs = [];
        for(var i = 0; i < scene.entities.length; i++){
            entityObjs.push({pos: {x:scene.entities[i].pos.x,y:scene.entities[i].pos.y},
                width: scene.entities[i].width,
                height: scene.entities[i].height});
        }

        for(var i = 0; i < scene.objects.length; i++){
            gameObjs.push({pos: {x:scene.objects[i].pos.x,y:scene.objects[i].pos.y},width: scene.objects[i].width,height:scene.objects[i].height});
        }
        
        return {index: index,name:scene.name,entities: entityObjs,objects: gameObjs};

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