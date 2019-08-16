import React, {useState} from 'react';
import {Container, Roll} from "../../../component";
import './DrawRolls.less';

function DrawRolls(props) {
    const [result,setResult] = useState('');

    return <Container header='抽奖大转盘' className='x_drawRolls' >
        <div className='x_drawRolls_res'>抽奖结果：<span>{result}</span></div>
        <Roll setResult={setResult}/>
    </Container>;
}

export default DrawRolls;