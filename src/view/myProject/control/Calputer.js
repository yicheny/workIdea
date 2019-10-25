import React, {useState} from 'react';
import {Button} from "../../../component";
import {N2} from "../../../utils/format";
import './Calputer.less';

function Calputer(props) {
    const btns = ['CE','DEL','+','-','*','/',1,2,3,4,5,6,7,8,9,0,'=','CLEAR'];
    // const isFuncBtn = value=>['CE','DEL','=','CLEAR'].includes(value);

    const [pre,setPre] = useState('');
    const [cur,setCur] = useState('');
    const [oper,setOper] = useState('');
    const [res,setRes] = useState('');
    const [record,setRecord] = useState(null);

    function btnClick(value) {
        if(isNum(value)) return setCur(cur+value);
        if(cur==='') return;
        if(isOperation(value)) {
            setPre(cur);
            setCur('');
            return setOper(value);
        }

        function isNum() {
            return !isNaN(Number(value))
        }
        function isOperation(value) {
             return ['+','-','*','/'].includes(value);
        }
        function scheduler(type) {
            const strategy = {
                '=':()=>{},
                'CE':()=>{},
                'DEL':()=>{},
                'CLEAR':()=>{}
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
                        {`${pre}${oper}${cur}`}
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