import React from 'react';

class Resume {
    constructor(name) {
        this.name = name;
        this.sex = null;
        this.age = null;
        this.timeArea = null;
        this.company = null;
    }

    resume = (name)=>{
        this.name = name;
    };

    setPersonInfo = (sex, age) => {
        this.sex = sex;
        this.age = age;
    };

    setWorkExperience = (timeArea,company)=>{
        this.timeArea = timeArea;
        this.company = company;
    };

    display = ()=>{
        console.log(this.name,this.sex,this.age,this.timeArea,this.company);
    };

    clone = ()=>{
        const obj = new Resume();
        obj.name = this.name;
        obj.age = this.age;
        obj.sex = this.sex;
        obj.timeArea = this.timeArea;
        obj.company = this.company;
        return obj;
    }
}

function BaseDemo(props) {
    const a = new Resume('大猫');
    a.setPersonInfo('男','11');
    a.setWorkExperience('2222','东京东京');

    const b = a.clone();
    b.resume('隆隆隆');
    b.setWorkExperience('3333','西京洗净');

    const c = a.clone();
    c.setPersonInfo('女','99');

    a.display();
    b.display();
    c.display();
    return <div></div>
}

export default BaseDemo;