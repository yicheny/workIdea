import React from 'react';
import {Container} from "../../../component";

function ExtractVariable(props) {
    const person = {
        name:'小明',
        income:{
            '7月':100000,
            '8月':88888,
            '9月':66666,
        },
        pay:{
            '7月':45555,
            '8月':26666,
            '9月':24444,
        }
    };

    //原代码
    function averageProfit(obj){
        return (amount(Object.values(obj.income)) - amount(Object.values(obj.pay)))/(Object.values(obj.income).length);

        function amount(list) {
            return list.reduce((acc,el) => acc+el,0)
        }
    }
    console.log(averageProfit(person));

    //重构代码
    function averageProfitR(obj) {
        const amountIncome = amount(Object.values(obj.income));
        const amountPay = amount(Object.values(obj.pay));
        const monthCount = (Object.values(obj.income).length);
        return (amountIncome - amountPay )/ monthCount;

        function amount(list) {
            return list.reduce((acc,el) => acc+el,0)
        }
    }
    console.log(averageProfitR(person));

    return <Container header='提炼变量'>
        <h3>曾用名：引入解释型变量</h3>
        <h3>反向重构：内联变量</h3>

        <h3>1. 什么时候需要使用提炼变量</h3>
        <div className="box">
            <p>表达式复杂而难以阅读时</p>
        </div>

        <h3>2. 动机：为什么要使用提炼变量？/提炼变量有什么好处？</h3>
        <div className="box">
            <p>1. 帮助理解代码逻辑</p>
            <p>2. 方便调试</p>
            <p>注意：提炼变量前需要检查这个变量所在的上下文，如果只有当前函数中用到，那么提炼变量是很好的选择，如果这个变量在更宽的上下文中也有意义，那么可以考虑将其暴露出来——一般通过函数的形式，一则可以减少重复的代码，二则可以更好的表达意图</p>
        </div>

        <h3>3. 做法：如何提炼变量？</h3>
        <div className="box">
            <p>1. 确认要提炼的表达式没有副作用</p>
            <p>2. 声明一个不可修改的变量，将表达式赋值到这个变量上</p>
            <p>3. 使用新变量替换原来的表达式</p>
            <p>4. 测试</p>
        </div>
    </Container>
}

export default ExtractVariable;