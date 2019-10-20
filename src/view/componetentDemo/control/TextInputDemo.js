import React from 'react';
import {Container, TextInput} from "../../../component";

function TextInputDemo(props) {
    return <Container header='TextInputDemo'>
        <div className="mar_wrap_b">
            <p><TextInput type='number' placeholder='只允许输入数字[十进制]'/></p>
            <p><TextInput type='number' system={2} placeholder='只允许输入数字[二进制]'/></p>
            <p><TextInput type='number' digit={2} placeholder='最多允许输入小数点后两位[精度2]'/></p>
            <p><TextInput required placeholder='请输入必填项'/></p>
            <p><TextInput type='number' max={110} placeholder='最大允许输入110'/></p>
            <p><TextInput type='number' min={40} placeholder='最小允许输入40'/></p>
            <p><TextInput placeholder='自动提示功能测试 组件设置autoP属性 即可启用自动提示' autoP/></p>
            <p><TextInput placeholder='通过设置autoPTime 即可控制自动提示间隔时间' autoP autoPTime={500}/></p>
        </div>
    </Container>
}

export default TextInputDemo;