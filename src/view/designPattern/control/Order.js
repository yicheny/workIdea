import React, {useState, useRef} from 'react';
import {Button, Input} from "../../../component";
import _ from 'lodash';

class OrderParse {
    constructor(initStatus, receiver) { //接收需要执行的函数及初始值
        this.statusList = [initStatus];
        this.receiver = receiver;
    }

    executor = (value) => { //执行
        if (this.statusList.length > 100) this.statusList.shift();
        this.statusList.push(value);
        this.receiver(value)
    };

    cancel = () => { //撤销
        if (this.statusList.length <= 1) return;
        this.statusList.pop();
        this.receiver(_.last(this.statusList))
    };
}

function Order(props) {
    const [text, setText] = useState('');
    const order = useRef(new OrderParse('', setText));

    return (<div style={{margin: 10}}>
        <h3>命令模式</h3>

        <h4>实现撤销【最多可以撤销100步】</h4>
        <Input value={text} onChange={e => order.current.executor(e.target.value)}/>
        <Button type='primary' onClick={order.current.cancel}>撤销</Button>
        <div className="box" style={{width: 320, height: 100}}>
            {text}
        </div>

    </div>);
}

export default Order;