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
    constructor(price=0){
        this.customs = [];//订阅者列表
        this.price = price;//发布者被依赖的状态
    }

    setPrice(price){ //价格变化的同时自动更新
        this.price = price;
        this.inform();
    }

    add(name,event){ //添加订阅者
        this.customs.push({name,event});
    }

    remove(name){ //从列表移除指定订阅者
        if(!name)return this.customs = [];//如果不传指定名称则清空列表
        this.customs = this.customs.filter(item=>item.name!==name);
    }

    inform(subjectName='all'){ //通知列表上的订阅者【可以设置指定的订阅者】
        if(subjectName==='all') return this.customs.forEach((item)=>item.event(this.price));

        const subject = this.customs.find(item=>item.name===subjectName);
        if(!subject) return console.error('不存在此订阅者');
        return subject.event(this.price);
    }
}

//价格发布者
class PricePublish extends Publish{
    add(name,event,price){
        this.customs.push({name,price,event});
    }

    inform(){
        this.customs.forEach((item)=>{
            if(this.price<=item.price) return item.event(this.price)
        })
    }
}


function DeepDemo(props) {
    const pricePublish = new PricePublish(12999);

    const hong = new Hong();
    const ming = new Ming();
    const qiang = new Qiang();
    pricePublish.add('hong',hong.buyPhone,11999,);
    pricePublish.add('ming',ming.buyPhone,5699);
    pricePublish.add('qiang',qiang.buyPhone,8899);

    pricePublish.setPrice(11888);
    pricePublish.setPrice(10888);
    pricePublish.setPrice(8888);
    pricePublish.setPrice(6888);
    pricePublish.setPrice(4888);

    return <div></div>
}

export default DeepDemo;