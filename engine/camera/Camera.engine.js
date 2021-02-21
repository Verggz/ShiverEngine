let PIXI = require('pixi.js');

class Camera{
    constructor(app, entity,world){
        this.app = app;
        this.target = entity.position;
        this.camera = new PIXI.Container();
        this.camera.position.set(app.renderer.screen.width / 2, app.renderer.screen.height / 2);

        this.camera.pivot.copyFrom(entity.position);
    }

    Update(){

    }

    Follow(){

    }
}

module.exports = Camera;