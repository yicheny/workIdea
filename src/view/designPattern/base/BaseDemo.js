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

class Sock {
    constructor(props){
        const {name=null,quality='normal',price=0} = props;
        this.name=name;
        this.quality=quality;
        this.price=price;
    }
}

class SockPantynose extends Sock{
    constructor(props){
        super(props);
        this.name = '连裤袜';
        console.log('连裤袜生产成功',this);
    }
}

class SockSocking extends Sock{
    constructor(props){
        super(props);
        this.name = '长筒袜';
        console.log('长筒袜生产成功',this);
    }
}

//抽象工厂类_用于定义公共的接口
class ProductFactory{
    createProduct = (proType,...rest)=>{
        if(proType==='toy') return new ToyProductFactory().createProduct(...rest);
        if(proType==='sock') return new SockProductFactory().createProduct(...rest);
    }
}

//具体工厂类_生产玩具
class ToyProductFactory{
    createProduct(type,...rest){
        const params = {
            size:rest[0],
            color:rest[1]
        }

        if(type==='yoyo') return new ToyYoyo(params);
        if(type==='babi') return new ToyBabi(params);
        return console.log(`生产失败!`)
    }
}

//具体工厂类_生产袜子
class SockProductFactory{
    createProduct(type,...rest){
        const params = {
            quality:rest[0],
            price:rest[1]
        }

        if(type==='pantynose') return new SockPantynose(params);
        if(type==='socking') return new SockSocking(params);
        return console.log(`生产失败!`)
    }
}

const toyFactory = new ProductFactory();
toyFactory.createProduct('toy','yoyo',18,'red');
toyFactory.createProduct('toy','babi',30,'blue');
toyFactory.createProduct('toy','yoyo');
toyFactory.createProduct('toy','dddd');

const sockProductFactory = new ProductFactory();
sockProductFactory.createProduct('sock','pantynose','height',1200);
sockProductFactory.createProduct('sock','socking','normal',600);
sockProductFactory.createProduct('sock','socking');
sockProductFactory.createProduct('sock','dddd');

function BaseDemo(props) {
    return <div></div>
}

export default BaseDemo;