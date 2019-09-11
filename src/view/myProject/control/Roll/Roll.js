import React, {useEffect} from 'react';
import './Roll.less';

function Roll(props) {
    const {setResult} = props;

    const giftInfos = ['一等奖','二等奖','三等奖','四等奖','五等奖','谢谢参与'];
    const lotteryPool = creLotterPool();
    let forbidClick = false;

    useEffect(()=>{
        creItem('.x_roll_light',18);
        creItem('.x_roll_bg',6);
        creItem('.x_roll_gift',6,giftInfos)
    },[]);

    return <div className="x_roll">
        <div className="x_roll_light fill">

        </div>
        <div className="x_roll_main fill">
            <div className="x_roll_bg fill">

            </div>
            <div className="x_roll_gift fill">

            </div>
        </div>
        <div className="x_roll_pointer" onClick={handleClick}>
            点击抽奖
        </div>
    </div>;

    function creItem(selector,count,textArr=[]){
        const deg = 360/count;
        const Box = document.querySelector(selector);
        Array.from(Array(count),(el,i)=>{
            const Item =  document.createElement('div');
            Item.style.transform = `rotate(${i*deg}deg)`;
            Item.className = `item`;
            if(textArr.length){
                const span = document.createElement('span');
                span.innerText = textArr[i];
                Item.appendChild(span);
            }
            Box.appendChild(Item);
        });
    }
    function handleClick() {
        if(forbidClick) return;
        const result = randomFor(lotteryPool);
        const Roll = document.querySelector('.x_roll_main');
        const Point = document.querySelector('.x_roll_pointer');
        Roll.removeAttribute('style');
        setTimeout(()=>{
            setResult('');
            Roll.style.transform = `rotate(${degFor(result)}deg)`;
            Roll.style.transition = 'transform 2.5s ease-out';
            Point.className = "x_roll_pointer forbid";
            forbidClick = true;
        },30);
        setTimeout(()=>{
            setResult(result);
            forbidClick = false;
            Point.className = "x_roll_pointer";
        },2530)
    }

    function creLotterPool() {
        const lotteryPool = Array(100);
        lotteryPool.fill('一等奖',0,1);
        lotteryPool.fill('二等奖',1,4);
        lotteryPool.fill('三等奖',4,10);
        lotteryPool.fill('四等奖',10,20);
        lotteryPool.fill('五等奖',20,50);
        lotteryPool.fill('谢谢参与',50,100);
        return lotteryPool;
    }
    function randomFor(array=[]) {
        const count = array.length;
        const index = Math.floor(Math.random()*count);
        return array[index];
    }
    function degFor(result) {
        return -60*giftInfos.indexOf(result) + 360*randomCount() - 30;

        function randomCount() {
            return Math.ceil(Math.random()*4+5)
        }
    }
}

Roll.defaultProps={
  // giftInfos:[]
};

export default Roll;