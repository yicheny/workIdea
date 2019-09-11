import React, {useState} from 'react';
import {Container, Radio, RadioGroup} from "../../../component";

function RadioDemo(props) {
    const [value,setValue] = useState('A');
    return <Container header='单选按钮测试'>
        <RadioGroup selected={value} onChange={(v)=>setValue(v)}>
            <Radio value='A'/>
            <Radio value='B'/>
            <Radio value='C'/>
            <Radio value='D'/>
        </RadioGroup>
    </Container>
}

export default RadioDemo;