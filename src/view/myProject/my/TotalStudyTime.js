import React,{useState} from 'react';
import {Container, TextInput} from "../../../component";
import {N2} from "../../../utils/format";

function TotalStudyTime(props) {
    const [res,setRes] = useState(0);

    return <Container header='自用统计工具'>
        <div className="mar_wrap_b">
            <div><TextInput onChange={totalTime}/></div>
            <div>共计：{N2(res)}</div>
        </div>
    </Container>;

    function totalTime(value) {
        const times = value.split(' ');
        setRes(times.reduce((acc,item)=>acc+Number(item),0))
    }
}

export default TotalStudyTime;