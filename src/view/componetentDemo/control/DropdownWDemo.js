import React from 'react';
import {Container, DropdownW} from "../../../component";

function DropdownWDemo(props) {
    const data = Array.from(Array(27),(el,i)=>({value:i.toString(),text:i.toString()}));
    return <Container header='DropdownWDemo'>
        <DropdownW options={data} value='6'/>
    </Container>
}

export default DropdownWDemo;