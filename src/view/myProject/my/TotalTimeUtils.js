import React, {useEffect, useState} from 'react';
import {Container,Icon} from "../../../component";
import {dateSymFor} from "../../../utils/date";

let timeId;
function TotalTimeUtils(props) {
    const [status,setStatus] = useState('stop');
    const [startTime,setStartTime] = useState(null);
    const [time,setTime] = useState(0);

    useEffect(()=>{
        if(status==='start'){
             timeId = setTimeout(()=>{
                 setTime((new Date()).getTime() - startTime)
             },1000)
        }
        return ()=>clearTimeout(timeId)
    },[status,time]);

    return <Container header='计时工具'>
        <div className='flex center-y'>
            <Icon type={status==='start'?'stop':'start'} color='#1890ff' size={32}
                  onClick={handleClick}
                  style={{'cursor':'pointer'}}
            />
            <span>{timeDis()}</span>
        </div>
    </Container>;

    function handleClick() {
        if(status==='stop'){
            setStartTime((new Date()).getTime());
            return setStatus('start');
        }
        setTime(0);
        return setStatus('stop');
    }

    function timeDis() {
        return dateSymFor(timeFor(),' : ','sec');

        function timeFor() {
            const t = Math.floor(time/1000);
            const hour = Math.floor(t/60/60);
            const min =Math.floor((t - hour*60)/60);
            const sec = t - hour*60*60 - min*60;
            return {hour, min, sec};
        }
    }
}

export default TotalTimeUtils;