import React from 'react';
import {Container} from "../../../../component";

function ChildrenTest(props) {
    return <Container header='Children学习'>
        <h3>React.Children有哪些API？</h3>
        <div className="box">
            <p>1.map_遍历子元素</p>
            <p>2.forEach_遍历子元素</p>
            <p>3.count_统计子元素数量</p>
            <p>4.toArray_转化子元素为数组</p>
            <p>5.only_只允许有一个子元素，超过则报错</p>
        </div>
    </Container>
}

export default ChildrenTest;