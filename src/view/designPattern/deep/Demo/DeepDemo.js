import React from 'react';

//购买者抽象类
class Buyer {
    buyPhone = (price)=>console.error('子类必须重写buyPhone方法');
}

//购买者子类小红
class Hong extends Buyer{
    buyPhone = (price)=>{
        if(price > 11999) return console.log(`iphone11 Pro价格为${price}元，小红觉得价格太高，暂时观望`);
        return console.log(`iphone11 Pro价格为${price}元，小红购买了iphone11 Pro!`)
    }
}

//购买者子类小明
class Ming extends Buyer{
    buyPhone = (price)=>{
        if(price > 5699)return console.log(`iphone11 Pro价格为${price}元，小明觉得价格太高，暂时观望`);
        return console.log(`iphone11 Pro价格为${price}元，小明购买了iphone11 Pro!`)
    }
}

//购买者子类小强
class Qiang extends Buyer{
    buyPhone = (price)=>{
        if(price > 8899) return console.log(`iphone11 Pro价格为${price}元，小强觉得价格太高，暂时观望`);
        return console.log(`iphone11 Pro价格为${price}元，小强购买了iphone11 Pro!`)
    }
}

//观察者
class Observer{
    constructor(){
        this.customs = [];//消费者列表
    }

    add(name,event){ //添加消费者
        this.customs.push({name,event});
    }

    remove(name){ //从列表移除指定消费者
        if(!name)return this.customs = [];//如果不传指定名称则清空列表
        this.customs = this.customs.filter(item=>item.name!==name);
    }

    inform(...rest){ //通知列表上的消费者【也可以设置成通知指定的消费者】
        this.customs.forEach((item)=>item.event(...rest))
    }
}

//价格观察者
class PriceObserver extends Observer{
    add(name,price,event){
        this.customs.push({name,price,event});
    }

    inform(price){
        this.customs.forEach((item)=>{
            if(price<=item.price) return item.event(price)
        })
    }
}


function DeepDemo(props) {
    const priceObserver = new PriceObserver();

    const hong = new Hong();
    const ming = new Ming();
    const qiang = new Qiang();
    priceObserver.add('hong',11999,hong.buyPhone);
    priceObserver.add('ming',5699,ming.buyPhone);
    priceObserver.add('qiang',8899,qiang.buyPhone);

    priceObserver.inform(11888);
    priceObserver.inform(10888);
    priceObserver.inform(8888);
    priceObserver.inform(6888);
    priceObserver.inform(4888);

    return <div></div>
}

export default DeepDemo;