import React from 'react';

class Resume {
    constructor(name) {
        this.name = name;
        this.sex = null;
        this.age = null;
        this.timeArea = null;
        this.company = null;
    }

    resume = function(name){
        this.name = name;
    };

    setPersonInfo = function(sex, age) {
        this.sex = sex;
        this.age = age;
    };

    setWorkExperience = function(timeArea,company){
        this.timeArea = timeArea;
        this.company = company;
    };

    display = function(){
        console.log(this.name,this.sex,this.age,this.timeArea,this.company);
    };

    clone = function(){
        return {...this};
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