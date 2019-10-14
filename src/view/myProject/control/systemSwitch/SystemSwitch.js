import React, {useState} from 'react';
import {Container, TextInput} from "../../../../component";

function SystemSwitch(props) {
    const [tenNum,setTenNum] = useState(0);
    const [twoNum,setTwoNum] = useState(0);

    return <Container header='进制转换'>
        <div>
            <h3>十进制转二进制:</h3>
            <TextInput type='number' value={tenNum} onChange={v=>setTenNum(Number(v))}/>
            <span style={{margin:'0 12px'}}>{tenSOther()}</span>
        </div>
        <div>
            <h3>二进制转十进制:</h3>
            <TextInput system={2} type='number' value={twoNum} onChange={v=>setTwoNum(Number(v))}/>
            <span style={{margin:'0 12px'}}>{otherSTen()}</span>
        </div>
    </Container>;

    function tenSOther(radix=2) {
        return tenNum.toString(radix);
    }
    function otherSTen(radix=2) {
        return parseInt(twoNum,radix)
    }
}

export default SystemSwitch;