import React from 'react';
import {Container} from "../../../component";

function total(a,b) {
    return a+b;
}

function TS1() {
    return (
        <Container header='TS1'>
            {total(1,2)}
        </Container>
    );
}

export default TS1;