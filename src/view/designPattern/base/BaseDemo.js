import React from 'react';

//抽象玩具类_定义具体玩具类的接口
class Toy {
    constructor(props){
        const {name=null,size=20,color='white'} = props;
        this.name=name;
        this.size=size;
        this.color=color;
    }
}

//具体玩具类_悠悠球
class ToyYoyo extends Toy{
    constructor(props){
        super(props);
        this.name = '悠悠球';
        console.log('悠悠球生产成功',this);
    }
}

//具体玩具类_芭比娃娃
class ToyBabi extends Toy{
    constructor(props){
        super(props);
        this.name = '芭比娃娃';
        console.log('芭比娃娃生产成功',this);
    }
}

//工厂类_根据约定的接口返回对应的实例对象
class ToyFactory{
    static createToy(type,size,color){
        // if(type==='yoyo') return new ToyYoyo({size,color});
        // if(type==='babi') return new ToyBabi({size,color});
        // return console.log(`生产失败!`)
    }
}


function BaseDemo(props) {
    // ToyFactory.createToy('yoyo',18,'red');
    // ToyFactory.createToy('babi',30,'blue');
    // ToyFactory.createToy('yoyo');
    // ToyFactory.createToy('dddd');

    ToyFactory.createToy(ToyYoyo);
    return <div></div>
}

export default BaseDemo;