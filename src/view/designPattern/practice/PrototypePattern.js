import React from 'react';

function PrototypePattern(props) {
    //实现原型链
    function Person(type) {
        this.type = type
    }

    Person.prototype.getType = function () {
        return this.type;
    };

    function Man(name) {
        this.name = name;
    }

    Man.prototype = new Person('man');//将原型链关联起来的关键
    Man.prototype.getTrue = function () {
        return this.name
    };
    const ylf = new Man('ylf');
    console.log(ylf);

    //使用Object.create实现【推荐】
    const ljf = Object.create(Man.prototype, {
        //数据属性
        name: {
            writable: true,//可写
            enumerable: true,//可枚举
            configurable: true,//可配置
            value: 'ljf'
        },
        //访问器属性
        age: {
            configurable: false,
            get: function () {
                return 20
            },
            set: function (value) {
                console.log(value);
            }
        }
    });
    console.log(ljf);
    return (
        <div>
            <p>{ylf.name}</p>
            <p>{ylf.getTrue()}</p>
            <p>{ylf.type}</p>
            <p>{ylf.getType()}</p>
        </div>
    );
}

export default PrototypePattern;
//原型模式的根本目的：用于创建对象

//原型模式基本规则
//1.所有数据都是对象
//2.原型模式下是通过原型对象创建一个新对象
//3.对象会记住它的原型
//4.如果对象无法响应某个请求，它会将这个请求委托给自己的原型