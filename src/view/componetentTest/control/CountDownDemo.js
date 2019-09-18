import React from 'react';
import {CountDown,Container} from "../../../component";

function CountDownDemo(props) {
    return <Container>
        <CountDown time={30}/>
    </Container>
}

export default CountDownDemo;