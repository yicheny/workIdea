import React,{useState} from 'react';
import {Button} from "../../../component";
import './Order2.less';
import _ from 'lodash'

const btns = ['CE','DEL','CANCEL','+','-','*','/',1,2,3,4,5,6,7,8,9,0,'=','RE'];
const function_btns = ['CE','DEL','RE','=','CANCEL'];
const operation_btns = ['+','-','*','/'];

const isOperation = function(value){
    return operation_btns.includes(value);
};

function Order2(props) {
    const [res,setRes] = useState('');
    const [course,setCourse] = useState(0);

    //算法
    const scheduler = {
        '=':()=>{
            if(isOperation(_.last(course))) return;

        },
        CE:()=>{
            setRes('');
            setCourse(0)
        },
        DEL:()=>{
            if(course.length<=1) return;
            setCourse(course.substring(0,course.length-1))
        },
        RE:()=>{

        },
        CANCEL:()=>{

        },
    };

    function btnClick(value) {
        if(function_btns.includes(value)){
            return scheduler[value]();
        }

        if(isOperation(_.last(course)) && isOperation(value)) return;

        setCourse(course+value)
    }
    return (
        <div className='x_order2' style={{margin:20}}>
            <h3>命令模式-实现回放</h3>
            <h4>1. =：进行运算，显示结果</h4>
            <h4>2. CE：清除运算</h4>
            <h4>3. DEL：删除一位</h4>
            <h4>4. CANCEL：撤销到上一次运算结果【最多支持100次撤销】</h4>
            <h4>5. RE：回放操作</h4>

            <div className="calputer box" style={{width:280,paddingTop:0}}>
                <div className="calputer_show box">
                    <div className="calputer_course">
                        {course}
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

export default Order2;