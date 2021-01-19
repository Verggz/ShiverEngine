let PIXI = require('pixi.js');

let Entity = require('../../engine/entities/Entity.engine');

class Player extends Entity{
    constructor(app){
        super(app);
    }
}

module.exports = Player;