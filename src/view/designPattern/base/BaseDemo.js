import React from 'react';

//Builder抽象类
class PersonBuilder{
    setSkinColor=()=>console.error("子类必须重写setSkinColor方法");

    setLanguage=()=>console.error("子类必须重写 setLanguage方法");

    setTerritory=()=>console.error("子类必须重写setTerritory方法");

    getPerson=()=>console.log(`该人种肤色是：${this.skinColor}，语言是：${this.language}，生活地域是：${this.territory}`);
}

//Builder具体子类_红人类组件
class RedPersonBuilder extends PersonBuilder{
    setSkinColor = ()=>{
        this.skinColor = '红色';
    }

    setLanguage = ()=>{
        this.language = '红人语';
    }

    setTerritory = ()=>{
        this.territory = '红人地域';
    }
}

//Builder具体子类_黄人类组件
class YellowPersonBuilder extends PersonBuilder{
    setSkinColor = ()=>{
        this.skinColor = '黄色';
    }

    setLanguage = ()=>{
        this.language = '黄人语';
    }

    setTerritory = ()=>{
        this.territory = '黄人地域';
    }
}

//指挥者类_负责抽象创建过程
class PersonDirector{
    constructor(builder={}){
        this.builder = builder
    }

    createPerson(){
        this.builder.setSkinColor();
        this.builder.setLanguage();
        this.builder.setTerritory();
        return this.builder;
    }
}



function BaseDemo(props) {
    const redPerson = new PersonDirector(new RedPersonBuilder()).createPerson();
    redPerson.getPerson();
    const yellowPerson = new PersonDirector(new YellowPersonBuilder()).createPerson();
    yellowPerson.getPerson();
    return <div></div>
}

export default BaseDemo;