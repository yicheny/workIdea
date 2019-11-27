import React, {useEffect, useState,useRef} from 'react';
import {Container,Icon} from "../../../component";
import {dateSymFor} from "../../../utils/date";

const TimeBar = React.memo(function() {
    const [status,setStatus] = useState('stop');
    const [startTime,setStartTime] = useState(null);
    const [time,setTime] = useState(0);
    const timeId = useRef(null);

    useEffect(()=>{
        if(status==='start'){
            timeId.current = setTimeout(()=>{
                setTime((new Date()).getTime() - startTime)
            },1000)
        }
        return ()=>clearTimeout(timeId.current)
    },[status,time]);

    return <div className='flex center-y'>
        <Icon type={status==='start'?'stop':'start'} color='#1890ff' size={32}
              onClick={handleClick}
              style={{'cursor':'pointer'}}
        />
        <span>{timeDis()}</span>
    </div>;

    function handleClick() {
        if(status==='stop'){
            if(!startTime) setStartTime((new Date()).getTime());
            return setStatus('start');
        }
        setStartTime(0);
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
});

function TotalTimeUtils(props) {
    return <Container header='计时工具'>
        <TimeBar/>
        <TimeBar/>
    </Container>;
}

export default TotalTimeUtils;