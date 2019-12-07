import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import {random} from "./utils/publicFun";
// import axios from 'axios';
import _ from 'lodash';

//抽象原型类_定义拷贝接口
class Prototype{
    clone=()=> console.error('子类必须重定义clone方法');
    cloneDeep=()=> console.error('子类必须重定义cloneDeep方法');
}

//具体原型类_实现拷贝接口
class AnswerPrototype extends Prototype{
    clone=function(){
        return _.clone(this)
    };

    cloneDeep=function(){
        return _.cloneDeep(this)
    };

    printRes = function(){
        console.log(`姓名：${this.name}`);
        console.log(`答案1：${this.selecte1}`);
        console.log(`答案2：${this.selecte2}`);
        console.log(`答案3：${this.selecte3}`);
    };
}

//具体作业子类小明_原型_具体实现
class MingAnswerPrototype extends AnswerPrototype{
    constructor(){
        super();
        this.name = '小明';
        this.selecte1 = '明明明1';
        this.selecte2 = '明明明2';
        this.selecte3 = '明明明3';
    }

    setName=function(name){
        this.name = name;
    };
    setSelectAnswer1 =function(answer){
        this.selecte1 = answer;
    };
    setSelectAnswer2 =function(answer){
        this.selecte2 = answer;
    };
    setSelectAnswer3 =function(answer){
        this.selecte3 = answer;
    };
}

//还是小明抄作业，定义的类不需要做任何改变
const ming = new MingAnswerPrototype();
//为小明扩展方法
ming.printName = function(){
    return console.log(`我的名字是：${this.name}`)
};
const long = ming.clone();
long.setName('小龙');
long.printName();//看！小龙继承了小明扩展的方法
function Demo(props) {
    return <div>

    </div>;
}

export default Demo;