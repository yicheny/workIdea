import React, {useState} from 'react';
import {Button} from "../../../component";
import './Calputer.less';
import {isNil} from "../../../utils/publicFun";
import Operation from "../../../base/Operation";

function Calputer(props) {
    const btns = ['CE','DEL','+','-','*','/',1,2,3,4,5,6,7,8,9,0,'=','CLEAR'];
    const operation = new Operation();

    const [num1,setNum1] = useState('');
    const [num2,setNum2] = useState('');
    const [oper,setOper] = useState('');
    const [res,setRes] = useState('');

    function btnClick(value) {
        if(isNum(value)){
            if(isNil(oper)) return setNum1(num1.concat(value));
            return setNum2(num2.concat(value))
        }
        if(isOperate(value)){
            if(isNil(num1)) return;
            return setOper(value)
        }
        return scheduler(value);

        function isNum(value) {
            return !isNaN(Number(value))
        }
        function isOperate(value) {
             return ['+','-','*','/'].includes(value);
        }
        function scheduler(type) {
            const strategy = {
                '=':()=>{
                    operation.num1 = Number(num1);
                    operation.num2 = Number(num2);
                    operation.operate = oper;
                    setRes(operation.resultFor());
                },
                'CE':()=>{
                    setRes('')
                },
                'DEL':()=>{
                    if(isNil(oper)) setNum1(num1.slice(0,num1.length-1));
                    if(isNil(num2)) setOper('');
                    return setNum2(num2.slice(0,num2.length-1));
                },
                'CLEAR':()=>{
                    setNum1('');
                    setNum2('');
                    setOper('');
                    setRes('');
                }
            };

            return strategy[type]();
        }
    }

    return (
        <div style={{margin:20}}>
            <div>
                <h3>计算器</h3>
                <h4>1. =：进行运算，显示结果【连续点击，可连续运算】</h4>
                <h4>2. CE：清除运算结果</h4>
                <h4>3. DEL：删除一位</h4>
                <h4>4. CLEAR：清空所有</h4>
            </div>

            <div className="calputer box carton_bg" style={{width:280,paddingTop:0}}>
                <div className="calputer_show box">
                    <div className="calputer_course">
                        {`${num1}${oper}${num2}`}
                    </div>
                    <div className="calputer_res">
                        {res}
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