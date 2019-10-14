import React from 'react';
import {Container, Progress} from "../../../component";

function ProgressDemo(props) {
    return <Container header={'Progress组件测试'}>
        <Progress percent={28} wrapHeight={12}/>
    </Container>
}

export default ProgressDemo;