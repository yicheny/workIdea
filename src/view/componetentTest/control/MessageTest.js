import React from 'react';
import {Button, Container, Message} from "../../../component";

function MessageTest(props) {
    return <Container header='Message组件测试'>
        <Button onClick={()=>Message.show('恭喜点击A成功')}>点击A</Button>
        <Button onClick={()=>Message.show('恭喜点击B成功')}>点击B</Button>
    </Container>
}

export default MessageTest;