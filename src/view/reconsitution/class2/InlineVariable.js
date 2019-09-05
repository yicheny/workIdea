import React from 'react';
import {Container} from "../../../component";

function InlineVariable(props) {
    const person = {
        name:'小明',
        income:8888
    };

    //原代码
    function isTaxes(obj) {
        const income = obj.income;
        return income > 5000;
    }
    console.log(isTaxes(person));

    //重构代码
    function isTaxesR(obj){
        return obj.income > 5000;
    }
    console.log(isTaxesR(person));

    return <Container header='内联变量'>
        <h3>曾用名：内联临时变量</h3>
        <h3>反向重构：提炼变量</h3>

        <h3>1. 什么时候应该内联变量</h3>
        <div className="box">
            <p>变量通常时候是个好东西，但是当这个变量不如表达式更具表现力时，那么就没什么必要，果断消除这个变量吧</p>
        </div>

        <h3>2. 怎么实现内联变量</h3>
        <div className="box">
            <p>1. 检查变量赋值语句右侧表达式有没有副作用</p>
            <p>2. 如果变量没有被声明为不可修改，先将其变为不可修改，并执行测试——这是为了确保改变量制备赋值一次</p>
            <p>3. 找到使用该变量的地方，替换为表达式</p>
            <p>4. 测试</p>
            <p>5. 删除该变量的声明和赋值语句</p>
            <p>6. 测试</p>
        </div>
    </Container>
}

export default InlineVariable;