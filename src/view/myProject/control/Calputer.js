import React, {useState} from 'react';
import {Button} from "../../../component";
import './Calputer.less';

const btns = ['CE','DEL','+','-','*','/',1,2,3,4,5,6,7,8,9,0,'=','CLEAR'];
const isFuncBtns = value=>['CE','DEL','=','CLEAR'].includes(value);
const isOperation = (value)=>['+','-','*','/'].includes(value);
const format=(value)=>value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')


function Calputer(props) {
    const [temp,setTemp] = useState('');
    const [opera,setOpera] = useState('');
    const [curr,setCurr] = useState(0);

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
        CE:()=>{
            setCurr(0)
        },
        DEL:()=>{
            setCurr(Number(curr.toString().substr(0,curr.toString().length-1)))
        },
        CLEAR:()=>{
            setTemp('');
            setOpera('');
            setCurr(0);
        }
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

        curr===0? setCurr(Number(value)):setCurr(Number(curr+value))
    }

    return (
        <div style={{margin:20}}>
            <h3>计算器</h3>
            <h4>1. =：进行运算，显示结果【连续点击，可连续运算】</h4>
            <h4>2. CE：清除运算结果</h4>
            <h4>3. DEL：删除一位</h4>
            <h4>4. CLEAR：清空所有</h4>

            <div className="calputer box carton_bg" style={{width:280,paddingTop:0}}>
                <div className="calputer_show box">
                    <div className="calputer_course">
                        {temp + opera}
                    </div>
                    <div className="calputer_res">
                        {format(curr)}
                    </div>
                </div>
                <div className="calputer_main">
                    {
                        btns.map((btn,i)=><Button key={i} onClick={(e)=>btnClick(e.target.innerHTML)}>{btn}</Button>)
                    }
                </div>
            </div>
        </div>
);}

export default Calputer;