import React from 'react';
import {Container, TextInput} from "../../../component";

function TextInputDemo(props) {
    return <Container header='TextInputDemo'>
        <div className="mar_wrap_b">
            <TextInput type='number' placeholder='只允许输入数字[十进制]'/>
            <TextInput type='number' system={2} placeholder='只允许输入数字[二进制]'/>
            <TextInput type='number' digit={2} placeholder='最多允许输入小数点后两位[精度2]'/>
            <TextInput required placeholder='请输入必填项'/>
        </div>
    </Container>
}

export default TextInputDemo;