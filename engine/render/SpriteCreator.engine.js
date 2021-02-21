let PIXI = require('pixi.js');

class SpriteCreator{
    constructor(app,src,options){
        this.sprite = null;
        app.loader.add(options.name,'../assets' + src).load((loader,resources) =>{
            this.sprite = new PIXI.Sprite(resources[options.name].texture);
            
            
            // Setup the position of the bunny
            this.sprite.x = app.renderer.width / 2;
            this.sprite.y = app.renderer.height / 2;
        
            this.sprite.position.set(options.position.x,options.position.y);
            this.sprite.scale.set(0.5,0.5);
            // Rotate around the center
            this.sprite.anchor.x = 0.5;
            this.sprite.anchor.y = 0.5;
            
        
            // Add the bunny to the scene we are building
        });

        return this.sprite;
        
    }

    SaveSprite(){
        
    }

    CreateSprite(){
        
    }

    Load(){

    }
}

module.exports = SpriteCreator;

