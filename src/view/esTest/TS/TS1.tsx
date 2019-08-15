import * as React from 'react';
import {Container} from "../../../component";

function total(a:number=0xf00d,b:number=0xf00d) {
    return a+b;
}

function TS1(props) {
    return (
        <Container header='TS1'>
            {total(1,2)}
        </Container>
    );
}

export default TS1;