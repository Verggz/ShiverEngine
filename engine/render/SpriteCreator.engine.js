const { Sprite } = require("pixi.js");

class SpriteCreator{
    constructor(app,src,options){
        app.loader.add(options.name,'../assets' + src).load((loader,resources) =>{
            const bunny = new PIXI.Sprite(resources[options.name].texture);
            
            
            // Setup the position of the bunny
            bunny.x = app.renderer.width / 2;
            bunny.y = app.renderer.height / 2;
        
            bunny.position.set(640,480);
            bunny.scale.set(0.5,0.5);
            // Rotate around the center
            bunny.anchor.x = 0.5;
            bunny.anchor.y = 0.5;
        
            // Add the bunny to the scene we are building.
            app.stage.addChild(bunny);
        });
        
    }

    CreateSprite(){
        
    }

    Load(){

    }
}

module.exports = SpriteCreator;

