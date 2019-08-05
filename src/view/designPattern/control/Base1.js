import React from 'react';

function Base1(props) {

    //多态
    const duck = {
        sound:()=>'嘎嘎嘎'
    };
    const chicken = {
        sound:()=>'咯咯咯'
    };
    const makeSound = (animal)=>animal.sound();

    return (
        <div>
            {makeSound(duck)}<br/>
            {makeSound(chicken)}
        </div>
    );
}

export default Base1;
//关于this指向，大致可分为
//1.普通函数——window
//2.对象方法——对象本身
//3.构造器调用——实例
//4.call,apply,bind——修改后的对象