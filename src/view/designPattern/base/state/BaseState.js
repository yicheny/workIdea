import React from 'react';
import {Container, MdHtml} from "../../../../component";
import mdPath from "./状态模式.md";

function BaseState(props) {
    return <Container header='状态模式'>
        <MdHtml path={mdPath}/>
    </Container>
}

export default BaseState;