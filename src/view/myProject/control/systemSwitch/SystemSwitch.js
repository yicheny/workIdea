import React, {useState} from 'react';
import {Container,Input} from "../../../../component";

function SystemSwitch(props) {
    const [tenNum,setTenNum] = useState(0);
    const [twoNum,setTwoNum] = useState(0);

    return <Container header='进制转换'>
        <div>
            <h3>十进制转二进制:</h3>
            <Input type='number' value={tenNum} onBlur={(e)=>setTenNum(Number(e.target.value))}/>
            <span style={{margin:'0 12px'}}>{tenSOther()}</span>
        </div>
        <div>
            <h3>二进制转十进制:</h3>
            <Input type='number' value={twoNum} onBlur={(e)=>setTwoNum(Number(e.target.value))}/>
            <span style={{margin:'0 12px'}}>{otherSTen()}</span>
        </div>
    </Container>;

    function tenSOther(raidx=2) {
        return tenNum.toString(raidx);
    }
    function otherSTen(radix=2) {
        return parseInt(twoNum,2)
    }
}

export default SystemSwitch;