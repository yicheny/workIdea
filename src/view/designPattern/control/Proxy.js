import React from 'react';

function Proxy(props) {
    //访问者——小明
    var xiaoMing = {
        name:'xiaoming',
        money: 100,
        appearance: 56,
        vip:'free',
        sendFlower: (interviewee) => {
            interviewee.receiveFlower(xiaoMing)
        }
    };

    //访问者2——小龙
    var xiaoLong = {
        name:'xiaolong',
        money: 999999,
        appearance: 89,
        vip:1,
        sendFlower: (interviewee) => {
            interviewee.receiveFlower(xiaoLong)
        }
    };

    //代理——小兰，为被访问者小红服务
    var xiaoLan = {
        receiveFlower: (visitor) => {
            if (visitor.money < 10000) return console.log('滚！');
            if (visitor.appearance < 75) return console.log('滚！');
            return xiaoHong.receiveFlower(visitor)
        }
    };

    //被访问者——小红
    var xiaoHong = {
        receiveFlower: (visitor) => {
            console.log('谢谢，我很开心！')
        }
    };
    xiaoMing.sendFlower(xiaoLan);
    xiaoLong.sendFlower(xiaoLan);

    //代理——小兰2,为访问者服务
    var xiaoLan2 = {
        receiveFlower:(visitor) => {
            if(visitor.name === 'xiaoming'){
                visitor.money *= 100;
                visitor.appearance += 30;
            }
            xiaoHong2.receiveFlower(visitor)
        }
    };

    //被访问者——小红2
    var xiaoHong2 = {
        receiveFlower:(visitor)=>{
            if (visitor.money < 10000) return console.log('滚！');
            if (visitor.appearance < 75) return console.log('滚！');
            console.log('谢谢，我很开心！')
        }
    };
    xiaoMing.sendFlower(xiaoLan2);

    //代理——小兰3
    var xiaoLan3 = {
        receiveFlower:(visitor)=>{
            if(visitor.vip === 'free'){
                return console.log('滚，穷逼！')
            }
            if(visitor.vip === 0){
                console.log('普通会员,过');
                visitor.money = 10000;
                visitor.appearance = 75;
            }
            if(visitor.vip >= 1){
                console.log('尊贵的超级会员，加');
                visitor.money *= 10000;
                visitor.appearance = 97;
            }
            xiaoHong.receiveFlower(visitor)
        }
    };
    xiaoMing.sendFlower(xiaoLan3);
    xiaoLong.sendFlower(xiaoLan3);

    return (
        <div>代理模式</div>
    );
}

export default Proxy;