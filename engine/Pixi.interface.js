let PIXI = require('pixi.js');
let {install} = require('@pixi/unsafe-eval');
let SpriteCreator = require('./render/SpriteCreator.engine');

let MainWorld = require('../assets/world/MainWorld');

class PIXIInterface{
    constructor(){
        install(PIXI);
        var app = new PIXI.Application({width:window.innerWidth,height:window.innerHeight,antialias:true});
        
        document.body.appendChild(app.view);

        this.app = app;
        this.Initalize();
    }

    //Set all app settings for the engine / game
    Initalize(){
        this.app.renderer.backgroundColor = 0xFFFFFF;
        this.app.stage.interactive = true;
        
        this.LoadContent();
    }

    //Create / load your classes and sprites here 
    LoadContent(){
        this.mainworld = new MainWorld(this.app);
        //new SpriteCreator(this.app,'/../lightblue.jpg',{name:'lightblue'});

        this.Update();
    }
    

    Update(){
        this.app.ticker.add((deltaTime) => {
            //console.log(delta);
            if((window.innerWidth == screen.width && window.innerHeight == screen.height)){
                this.app.resizeTo = window;
                this.app.resize();
            }

           
        });

        this.mainworld.Update();
    }
    
}
//
//new PIXIInterface();
module.exports = new PIXIInterface();
