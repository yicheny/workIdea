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

//发布者
class Publish{
    constructor(){
        this.customs = [];//订阅者列表
        this.price = 12999;
    }

    add(name,event){ //添加订阅者
        this.customs.push({name,event});
    }

    remove(name){ //从列表移除指定订阅者
        if(!name)return this.customs = [];//如果不传指定名称则清空列表
        this.customs = this.customs.filter(item=>item.name!==name);
    }

    inform(...rest){ //通知列表上的订阅者【也可以设置成通知指定的订阅者】
        this.customs.forEach((item)=>item.event(...rest))
    }
}

//价格发布者
class PricePublish extends Publish{
    setPrice(price){
        this.price = price;
        this.inform(this.price);
    }
}


function DeepDemo(props) {
    const pricePublish = new PricePublish();

    const hong = new Hong();
    const ming = new Ming();
    const qiang = new Qiang();
    pricePublish.add('hong',11999,hong.buyPhone);
    pricePublish.add('ming',5699,ming.buyPhone);
    pricePublish.add('qiang',8899,qiang.buyPhone);

    pricePublish.inform(11888);
    pricePublish.inform(10888);
    pricePublish.inform(8888);
    pricePublish.inform(6888);
    pricePublish.inform(4888);

    return <div></div>
}

export default DeepDemo;