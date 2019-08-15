import * as React from 'react';
import * as ReactDOM from 'react-dom'
import './Message.less';

function Notice(info:string) {
    return <div className='notice'>
        {info}
    </div>
}
Notice.defaultProps={
    info:''
};

class Message{
    div:HTMLDivElement;
    timeId:number;
    destoryTime:number;

    constructor(){
        this.div = null;
        this.timeId = null;
        this.destoryTime = 1200;
    }

    autoDestory:Function = ()=>{
        this.timeId = setTimeout(()=>{
            this.destory()
        },this.destoryTime);
    };

    destory:Function = ()=>{
        if(this.div){
            this.div.parentNode.removeChild(this.div);
            this.div=null;
        }
    };

    addDiv:Function = (info:string,callback:Function=()=>{})=>{
        if(this.div) return;
        this.div = document.createElement('div');
        this.div.className = 'x_message';
        document.body.appendChild(this.div);
        ReactDOM.render(Notice(info),this.div);
        callback();
    };

    show:Function = (info:string,destoryTime:number)=>{
        if(destoryTime) this.destoryTime=destoryTime;
        this.addDiv(info,this.autoDestory);
    };
}

const message = new Message();
export default message;