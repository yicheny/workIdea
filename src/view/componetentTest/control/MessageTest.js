import React from 'react';
import {Button, Container, Message} from "../../../component";

function MessageTest(props) {
    return <Container header='Message组件测试'>
        <Button onClick={() => Message.show({info:'恭喜点击A成功',icon:'success'})}>点击A</Button>
        <Button onClick={() => Message.show({info:'抱歉点击B失败',icon:'error'})}>点击B</Button>
        <Button onClick={() => Message.show({info:'警告,点击C有风险',icon:'warn'})}>点击C</Button>
    </Container>
}

export default MessageTest;