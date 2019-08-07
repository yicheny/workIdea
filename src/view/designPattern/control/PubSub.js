import React from 'react';

class Event { //发布者
    constructor(){
        this.clientList = {} //缓存列表
    }

    listen = (key,fn)=>{ //订阅
        if(!this.clientList[key]){
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    };

    remove = (key,fn)=>{ //取消订阅
        let fns = this.clientList[key];
        if(!fns) return;

        if(!fn){ //没有传入具体回调，默认取消所有订阅
            return fns.length = 0;
        }

        this.clientList[key] = fns.filter(el => el !== fn)
    };

    trigger = (key,...params)=> { //发布
        const fns = this.clientList[key];

        if (!fns || !fns.length) return;

        fns.forEach(fn=>{
            fn(...params);
        })
    }
}

function PubSub(props) {
    const event = new Event();
    function ming(value){console.log('小明:'+value)}
    function hong(value){console.log('小红:'+value)}
    event.listen('ming',ming);
    event.listen('hong',hong);
    event.trigger('ming',10);
    event.trigger('hong',109);
    event.listen('ming',hong);
    event.remove('ming',ming);
    // event.remove('ming');
    event.trigger('ming',300);


    return (
        <div>发布订阅</div>
    );
}

export default PubSub;