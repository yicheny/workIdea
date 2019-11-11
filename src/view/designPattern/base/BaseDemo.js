import React from 'react';

class Toy {
    constructor(props){
        const {name=null,size=20,color='white'} = props;
        this.name=name;
        this.size=size;
        this.color=color;
    }
}

class ToyYoyo extends Toy{
    constructor(props){
        super(props);
        this.name = '悠悠球';
        console.log('悠悠球生产成功',this);
    }
}

class ToyBabi extends Toy{
    constructor(props){
        super(props);
        this.name = '芭比娃娃';
        console.log('芭比娃娃生产成功',this);
    }
}

class ToyFactory{
    createToy(type,size,color){
        const toys = {
            'yoyo':ToyYoyo,
            'babi':ToyBabi
        };

        const tempToy = toys[type];
        if(!tempToy) return console.log('生产失败');
        return new tempToy({size,color});
    }
}

const toyFactory = new ToyFactory();
toyFactory.createToy('yoyo',18,'red');
toyFactory.createToy('babi',30,'blue');
toyFactory.createToy('yoyo');
toyFactory.createToy('dddd');

function BaseDemo(props) {
    return <div></div>
}

export default BaseDemo;