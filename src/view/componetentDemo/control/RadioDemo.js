import React, {useState} from 'react';
import {Container, Radio, RadioGroup} from "../../../component";

function RadioDemo(props) {
    const [value,setValue] = useState('A');
    return <Container header='单选按钮测试'>
        <RadioGroup selected={value} onChange={(v)=>setValue(v)}>
            <Radio value='A'>AQ</Radio>
            <Radio value='B'>BQ</Radio>
            <Radio value='C'>CQ</Radio>
            <Radio value='D'>DQ</Radio>
        </RadioGroup>
    </Container>
}

export default RadioDemo;