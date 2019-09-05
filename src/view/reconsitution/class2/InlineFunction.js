import React from 'react';
import {Container} from "../../../component";

function InlineFunction(props) {
    return <Container header='内联函数'>
        <h3>反向重构：提炼函数</h3>

        <h3>1. 动机-何时内联函数？</h3>
        <div className="box">
            当这个函数没有让代码意图更清晰，反而混乱了开发者的理解时。
        </div>
        <h3>2. 做法-如何进行内联函数？</h3>
        <div className="box">
            <ul>
                <li>1. 检查函数，确定其不具多态性</li>
                <li>2. 找出这个函数的所有调用点</li>
                <li>3. 将函数替换为这个函数本体</li>
                <li>4. 测试</li>
                <li>5. 删除原函数定义</li>
                <li>注意：对遇到递归调用、多返回点、内联至另一个对象而该对象并无访问函数等复杂情况时，不应该使用这个重构手法</li>
            </ul>
        </div>
    </Container>
}

export default InlineFunction;