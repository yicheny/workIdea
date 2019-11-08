import React from 'react';
import {Container, MdHtml} from "../../../../component";
import mdPath from './OTM表示法.md';

function OMT(props) {
    return <Container header='OTM表示法'>
        <MdHtml path={mdPath}/>
    </Container>
}

export default OMT;