import _ from "lodash";

//设置组合键
class SingleTon {
    constructor(fn){
        this.fn = fn;
    }

    executor(){
        if(this.fn){
            this.fn();
        }
    }
}

const ProxySingleTon = (()=>{
    let instance;
    return function (fn) {
        if(!instance){
            instance = new SingleTon(fn);
            return instance.executor();
        }
        return ()=>{}
    }
})();

class CombinKey{
    constructor(appointKeys=[],receiver=null){
        this.appointKeys = appointKeys;
        this.keys = [];
        this.receiver = receiver;
        this.timeId = null;
    }

    keysAutoClear(){
        this.timeId = setInterval(()=>{
            this.keys = [];
        },300)
    }

    add(keyCode){
        clearInterval(this.timeId);
        if(this.keys.length === 0) this.keysAutoClear();
        if(this.keys.length>=this.appointKeys.length){
            this.keys.shift();
        }
        this.keys.push(keyCode);
    }

    executor() {
        if (_.uniq(this.keys).length === this.appointKeys.length){
            const flag = this.keys.every(el=>this.appointKeys.includes(el));
            if(flag){
                console.log('组合键成功');
                if(this.receiver) this.receiver();
                this.keys = [];
                clearInterval(this.timeId);
            }
        }
    }
}

export function setCombinKey(appointKeys=[],fn=()=>{}) {
    const combinKeys = new CombinKey(appointKeys,fn);

    const keyEvent = ()=>{
        document.addEventListener('keydown',(e)=>{
            combinKeys.add(e.keyCode);
            combinKeys.executor();
        });
    };

    new ProxySingleTon(keyEvent);
}

//实现逻辑
/*
1.先使用单例模式确保全局只有这一个组合键监听事件
2.设置一个内部数组存储预定组合键值，一个内部数组存储输入的键值，控制存储输入数组项数时刻与组合键值相同【相当于一个滑动窗口，只留下与预定组合键数量相同的最新的输入键值】
2.1 当存储键值数组项数为0时会启动一个定时器【启动前先清除之前的定时器】，定时会在极短时间内【设置300ms】定时清除键值数组项
3.每一次执行会触发方法先去重存储键值，如果去重后数量与预定组合键值相同，则再通过数组的every方法进行判断，完全相同执行预定事件
4.执行预定事件后，清空存储键值数组，并清除定时器
* */