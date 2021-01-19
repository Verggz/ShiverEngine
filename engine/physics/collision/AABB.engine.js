let PIXI = require('pixi.js');

class AABB{
    constructor(width,height,pos){
        this.trigger = false;
        this.width = width;
        this.height = height;
        this.pos = pos;
    }

    Update(pos){
        this.UpdateCoords(pos);
    }

    UpdateCoords(pos){
        this.pos = pos;
    }

    isColliding(otherPos,otherWidth,otherHeight){
        if(this.trigger){
            if(this.pos.x <  otherPos.x + otherWidth &&
                this.pos.x + this.width > otherPos.x &&
                this.pos.y < otherPos.y + otherHeight &&
                this.pos.y + height > otherHeight){
                    return true;
                }else{
                    return false;
                }
        }else{
            return false;
        }
    }

    Toggle(){
        this.trigger = !this.trigger;

        return this.trigger;
    }

    IsTouchingLeft(otherPos,otherWidth,otherHeight){
        return (this.pos.x < otherPos.x + otherWidth);
    }

    IsTouchingRight(otherPos,otherWidth,otherHeight){
        return (this.pos.x + this.width > otherPos);
    }

    IsTouchingTop(otherPos,otherWidth,otherHeight){
        return (this.pos.y < otherPos.y + otherHeight);
    }

    IsTouchingBottom(otherPos,otherWidth,otherHeight){
        return (this.pos.y + this.height > otherHeight);
    }
}

module.exports = AABB;