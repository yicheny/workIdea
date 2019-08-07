import React, {useRef, useState} from 'react';
import {Button} from "../../../component";
import './Order2.less';

const btns = ['C','DEL','+','-','*','/',1,2,3,4,5,6,7,8,9,0,'='];
const isFuncBtns = function (value) {
    return ['C','DEL','RE','=','CANCEL'].includes(value)
};
const isOperation = function(value){
    return ['+','-','*','/'].includes(value);
};

function Order2(props) {
    const [temp,setTemp] = useState('');
    const [opera,setOpera] = useState('');
    const [curr,setCurr] = useState(0);
    // const order = useRef(new OrderParse(btnClick));

    //算法
    const scheduler = {
        '+':()=>{
            setCurr(temp + curr)
        },
        '-':()=>{
            setCurr(temp - curr)
        },
        '*':()=>{
            setCurr(temp * curr)
        },
        '/':()=>{
            setCurr(temp / curr)
        },
        '=':()=>{
            scheduler[opera]();
        },
        C:()=>{
            setCurr(0)
        },
        DEL:()=>{
            setCurr(Number(curr.toString().substr(0,curr.toString().length-1)))
        },
        RE:()=>{

        },
        CANCEL:()=>{

        },
    };

    function btnClick(value) {
        if(isFuncBtns(value)){
            return scheduler[value]()
        }
        if(isOperation(value)){
            setTemp(curr);
            setCurr(0);
            return setOpera(value)
        }

        if(curr===0){
            return setCurr(Number(value))
        }
        setCurr(Number(curr+value))
    }

    return (
        <div className='x_order2' style={{margin:20}}>
            <h3>命令模式-实现回放</h3>
            <h4>1. =：进行运算，显示结果【连续点击，可连续运算】</h4>
            <h4>2. C：清除运算</h4>
            <h4>3. DEL：删除一位</h4>
            {/*<h4>4. CANCEL：撤销到上一次运算结果【最多支持100次撤销】</h4>*/}
            {/*<h4>5. RE：回放操作</h4>*/}

            <div className="calputer box" style={{width:280,paddingTop:0,background:'#fff'}}>
                <div className="calputer_show box">
                    <div className="calputer_course">
                        {temp + opera}
                    </div>
                    <div className="calputer_res">
                        {curr}
                    </div>
                </div>
                <div className="calputer_main">
                    <Button>CANCEL</Button>
                    {
                        btns.map((btn,i)=><Button key={i} onClick={(e)=>btnClick(e.target.innerHTML)}>{btn}</Button>)
                    }
                    <Button>RE</Button>
                </div>
            </div>
        </div>
);}

export default Order2;