import React from 'react';
import {Container} from "../../../component";

function ExtractFunction(props) {
    const person = {
        name: 'ylf',
        sexy: 'man'
    };

    //原代码
    function printInfo(obj) {
        console.log('这里是中华人民共和国');
        console.log('北京市');

        //打印身份信息
        console.log('姓名：' + obj.name);
        console.log('性别：' + obj.sexy);
    }
    printInfo(person);

    //重构代码
    function printInfoR(obj) {
        console.log('这里是中华人民共和国');
        console.log('北京市');
        printObjInfo(obj);

        function printObjInfo(obj) {
            console.log('姓名：' + obj.name);
            console.log('性别：' + obj.sexy);
        }
    }
    printInfoR(person);

    return <Container header='提炼函数'>
        <h3>反向重构：内联函数</h3>

        <h3>1.何时应该把代码放进独立的函数？</h3>
        <div className="box">
            将意图与实现分开——如果需要花一段时间才能明白这段代码在做什么，那么就应该将它提炼出来，并为它所作的事命名。
        </div>
        <h3>2.如何实现？</h3>
        <div className="box">
            <ul>
                <li>1. 创造一个新函数，根据函数意图命名【关注**做什么**,而非**怎么做**</li>
                <li>2. 将待提炼的代码从源函数复制到新建的目标函数中</li>
                <li>3. 检查提炼出的代码，查看是否有因作用域访问不到的变量，如果有，则以参数形式传给新函数</li>
                <li>4. 用新函数替换原代码</li>
                <li>5. 测试</li>
            </ul>
        </div>
    </Container>
}

export default ExtractFunction;