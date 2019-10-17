import React from 'react';
import {Container, TextInput} from "../../../component";

function TextInputDemo(props) {
    return <Container header='TextInputDemo'>
        <div className="mar_wrap_b">
            <TextInput type='number' placeholder='只允许输入数字' onChange={()=>{}}/>
        </div>
    </Container>
}

export default TextInputDemo;