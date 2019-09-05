import React from 'react';
import {Container} from "../../../component";

function ChangeFunctionDeclaration(props) {
    const person = {
        phoneCode:18812344321
    };

    //原代码
    function changePhoneCode(person) {
        const phoneCode = person.phoneCode.toString();
        return `${phoneCode.slice(0,3)} ${phoneCode.slice(3,7)} ${phoneCode.slice(7,11)}`;
    }
    console.log(changePhoneCode(person));

    //重构代码
    function changePhoneCodeR(phoneCode) {
        phoneCode = phoneCode.toString();
        return `${phoneCode.slice(0,3)} ${phoneCode.slice(3,7)} ${phoneCode.slice(7,11)}`;
    }
    console.log(changePhoneCodeR(person.phoneCode));

    return <Container header='改变函数声明'>
        <h3>曾用名：函数改名</h3>
        <h3>曾用名：移除参数</h3>
        <h3>曾用名：添加参数</h3>
        <h3>曾用名：修改签名</h3>

        <h3>1. 什么时候需要改变函数声明？</h3>
        <div className="box">
            <p>1. 函数名不能一眼看出函数用途时【一个改名的推荐方法：先为这个函数用途写一个注释，再将注释编程函数名】</p>
            <p>2. 关于修改函数的参数，这一点非常重要。为什么？函数的参数列表阐述/体现了函数如何与外部交流和共处，函数的参数设置了一个上下文，只有在这个上下文中，参数才能被使用。</p>
            <p>实例：如果用一个函数的用途时将某人的电话号码转换为特定的格式，该函数的参数是一个人（person），那么我们就不能使用这个函数去处理电话公司（company）的电话号码，如果我们将函数参数由“人”改为“电话号码”，那么这段代码就可以被更广泛的使用</p>
            <p>2-1. 参数详解: 修改参数列表不仅能增加函数的应用范围，更重要的意义在于它能改变连接一个模块所需的条件，从而去除不必要的耦合</p>
        </div>

        <h3>2. 如何实现“改变函数声明”</h3>
        <div className="box">
            <h3>简单做法</h3>
            <p>1. 修改函数名称</p>
            <p>2-1. 移除参数：先确定函数体内有没有用到这个参数</p>
            <p>2-2. 添加参数：</p>
            <p>2-3. 修改参数：</p>
            <p>3. 找出所有使用旧函数声明的地方，替换</p>
            <p>4. 测试</p>
            <p>注意：推荐修改名称和修改参数分为两步来进行，如果遇到了麻烦，请撤销修改，采用迁移式做法</p>
        </div>
        <div className="box">
            <h3>迁移式做法</h3>
            <p>0. 先查看一下，确认是有必要对函数体内部进行重构，以便后续步骤方便开展</p>
            <p>1. 使用提炼函数手法将函数题提炼成一个新函数</p>
            <p>2. 修改参数【有待提供详细步骤】</p>
            <p>3. 使用新函数替代原函数</p>
            <p>4. 测试</p>
            <p>5. 删除旧函数</p>
            <p>6. 如果新函数使用了临时的名称，则使用改变函数声明手法将其改回原来的名字</p>
        </div>

        <h3>3. 关于修改参数部分的手法详细介绍</h3>
        <div className="box">
            
        </div>
    </Container>
}

export default ChangeFunctionDeclaration;