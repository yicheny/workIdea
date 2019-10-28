import React from 'react';
import {Container, DropdownW} from "../../../component";

function DropdownWDemo(props) {
    const data = Array.from(Array(27),(el,i)=>({value:i,text:i}));
    return <Container header='DropdownWDemo'>
        <DropdownW options={data}/>
    </Container>
}

export default DropdownWDemo;