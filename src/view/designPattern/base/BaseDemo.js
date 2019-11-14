import React from 'react';
import _ from 'lodash';

class Answer{
    constructor(){
        this.name = null;
        this.selecte1 = null;
        this.selecte2 = null;
        this.selecte3 = null;
    }

    setName =()=>console.error('子类必须重写setName方法');
    setSelectAnswer1 =()=>console.error('子类必须重写setSelectAnswer1方法');
    setSelectAnswer2 =()=>console.error('子类必须重写setSelectAnswer2方法');
    setSelectAnswer3 =()=>console.error('子类必须重写setSelectAnswer3方法');

    printRes = function(){
        console.log(`姓名：${this.name}`);
        console.log(`答案1：${this.selecte1}`);
        console.log(`答案2：${this.selecte2}`);
        console.log(`答案3：${this.selecte3}`);
    };

    clone=function(){
        return _.clone(this)
    };

    cloneDeep=function(){
        return _.cloneDeep(this)
    }
}

//具体作业子类小明_原型_具体实现
class MingAnswerPrototype extends Answer{
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

function BaseDemo(props) {
    return <div></div>
}

export default BaseDemo;