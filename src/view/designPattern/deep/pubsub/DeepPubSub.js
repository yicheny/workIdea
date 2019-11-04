import React from 'react';
import {Container, MdHtml} from "../../../../component";
import mdPath from './观察者模式.md';

function DeepPubSub(props) {
    return <Container header='观察者模式'>
        <MdHtml path={mdPath}/>
    </Container>
}

export default DeepPubSub;