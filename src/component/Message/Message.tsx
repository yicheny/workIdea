import * as React from 'react';
import * as ReactDOM from 'react-dom'
import './Message.less';
// import {sleep} from "../../utils/publicFun";

function Notice(info:string) {
    return <div className='notice'>
        {info}
    </div>
}
Notice.defaultProps={
    info:''
};

class Message{
    box:HTMLDivElement;
    timeId:number;
    destoryTime:number;
    infos:string[];
    divQueue:HTMLDivElement[];
    // infoMaxLen:number;

    constructor(){
        this.box = null;
        this.timeId = null;
        this.destoryTime = 1200;
        this.infos = [];
        this.divQueue = [];
        // this.infoMaxLen = 10;
    }

    autoDestory = ()=>{
        this.timeId = setTimeout(()=>{
            this.destory()
        },this.destoryTime);
    };

    destory = ()=>{
        const div = this.divQueue.shift();
        this.infos.shift();
        div.parentNode.removeChild(div);
    };

    addBox = ()=>{
        if(!this.box){
            this.box = document.createElement('div');
            this.box.className = 'x_message_box';
            document.body.appendChild(this.box);
        }
    };

    addDivQueue = (div:HTMLDivElement)=>{
        this.divQueue.push(div);
    };

    addDiv = (info:string)=>{
        this.addBox();
        const div = document.createElement('div');
        div.className = 'x_message';
        this.box.appendChild(div);
        this.addDivQueue(div);
        ReactDOM.render(Notice(info),div);
    };

    addInfo = (info:string)=>{
        this.infos.push(info)
    };

    show = (info:string,destoryTime:number)=>{
        if(destoryTime) this.destoryTime=destoryTime;
        this.addInfo(info);
        this.addDiv(info);
        setTimeout(()=>{
            this.autoDestory();
        },0);
        // this.addDiv(info);
        // sleep(400);
    };
}

const message = new Message();
export default message;