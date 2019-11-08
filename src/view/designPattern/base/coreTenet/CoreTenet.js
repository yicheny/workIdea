import React from 'react';
import {Container, MdHtml} from "../../../../component";
import mdPath from './设计模式核心原则.md';

function CoreTenet(props) {
    return <Container header='设计模式核心原则'>
        <MdHtml path={mdPath}/>
    </Container>
}

export default CoreTenet;