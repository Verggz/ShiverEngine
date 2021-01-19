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
        app.renderer.backgroundColor = 0xFFFFFF;
        new SpriteCreator(app,'/../lightblue.jpg',{name:'lightblue'});
        this.Update();
    }
    

    Update(){
        this.app.ticker.add((delta) => {
            console.log(this.app.ticker.FPS)
            //console.log(delta);
            if((window.innerWidth == screen.width && window.innerHeight == screen.height)){
                this.app.resizeTo = window;
                this.app.resize();
            }
        });
    }
    
}
//
//new PIXIInterface();
module.exports = new PIXIInterface();
