let PIXI = require("pixi.js"); 
let SpriteCreator = require('../render/SpriteCreator.engine');
let AABB = require('../physics/collision/AABB.engine');
const { Point } = require("pixi.js");

class GameObject{
    constructor(app,width,height){
        this.app = app;
        this.sprite = new SpriteCreator(this.app,'/player/sprite/player.jpg').sprite;

        this.width = width;
        this.height = height;
        this.position = new PIXI.Point(0,0);

        this.visible = true;

        this.collision = new AABB(width,height,this.position);
    }

    Initalize(){
        
    }

    Update(){
        
    }
}

module.exports = GameObject;