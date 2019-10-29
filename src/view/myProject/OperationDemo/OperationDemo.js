import React, {useState} from 'react';
import {Button, Container, TextInput} from "../../../component";
import OperationFactory from "../../../base/Operation";

function OperationDemo(props) {
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [oper, setOper] = useState(null);
    const [res,setRes] = useState('');

    return <Container header='计算类测试'>
        <div className="mar_wrap_b">
            <p>输入数字1：<TextInput onChange={setNum1}/></p>
            <p>输入数字2：<TextInput onChange={setNum2}/></p>
            <p>输入运算符：<TextInput onChange={setOper}/></p>
            <p style={{lineHeight:'32px'}}><Button onClick={resFor}>点击获取结果</Button> 运算结果：{res}</p>
        </div>
    </Container>;

    function resFor() {
        const operation = new OperationFactory(oper).createFactory();
        if(!operation) return;
        operation.num1 = Number(num1);
        operation.num2 = Number(num2);
        setRes(operation.resultFor())
    }
}

export default OperationDemo;