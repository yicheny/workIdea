import React from 'react';
import {Container, Progress} from "../../../component";

function CountDownProgress(props) {
    return <Container>
        <div className='countDownProgress'>
            <Progress percent={20} wrapHeight={20}/>
        </div>
    </Container>
}

export default CountDownProgress;