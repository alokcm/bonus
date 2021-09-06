
import { _decorator, Component,Vec3, Node, Sprite, SpriteFrame, Button, tween } from 'cc';
import { EDITOR } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('ButtonAction')
export class ButtonAction extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;


    @property(Button)    
    syringes = [];

    @property(SpriteFrame)
    image : SpriteFrame = null;

    @property(Node)
    nodePop : Node = null;

    start () {
        // [3]
    }
    
    popCancel(event : Event , custom : string)
    {
        console.log('hikk');
        let nodeP = this.node.getChildByName('popUpImage');
        console.log({nodeP});
        tween(nodeP)
            .to(1,{scale : new Vec3(0,0,0),angle : 90})
            .start();
    }

    buttonAction(event : Event, index : string)
    {
         //console.log(`botton presssed ` +  index  + ` data receved`);
        console.log('card ' + (parseInt(index)+1) + ' clicked');
        let tempNode : Node = event.currentTarget;
        tween(tempNode)
            .to(0.5,{scale : new Vec3(0,0.6,1)},{})
            .to(0.5,{scale : new Vec3(0.6,0.6,1)},{})
            .to(0.5,{scale : new Vec3(0.6,0.6,1)},{})
            .to(0.5,{scale : new Vec3(0.6,0.6,1)},{})
            .start()
            
        tween(this.nodePop)
            .delay(1)
            .to(0.5, {position: new Vec3(0,0,0), scale : new Vec3(1,1,1), angle : 90})
            .start();
    }
    onLoad()
    {

    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
