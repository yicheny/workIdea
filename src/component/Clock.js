import React, {useState,useEffect} from 'react';

function Clock(){
    const [date,setDate] = useState(new Date());

    useEffect(()=>{
        setInterval(()=>{setDate(new Date())},1000);
        return clearInterval()
    },[date]);

    const timeFormat = (v)=>{
        if(v<10){
            return '0'+v;
        }
        return v
    };

    return <span className='clock'>
        {`${timeFormat(date.getHours())}:${timeFormat(date.getMinutes())}:${timeFormat(date.getSeconds())}`}
    </span>
}

export default Clock;