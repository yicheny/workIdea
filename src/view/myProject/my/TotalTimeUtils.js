import React, {useEffect, useState,useRef} from 'react';
import {Button, Container, Icon} from "../../../component";
import {dateSymFor} from "../../../utils/date";

const TimeBar = React.memo(function(props) {
    const {name} = props;

    const [status,setStatus] = useState('stop');
    const [startTime,setStartTime] = useState(null);
    const [time,setTime] = useState(0);
    const [saveTime,setSaveTime] = useState(0);
    const timeId = useRef(null);

    useEffect(()=>{
        if(status==='start'){
            timeId.current = setTimeout(()=>{
                const leadTime = (new Date()).getTime() - startTime;
                setTime(leadTime + saveTime);
            },1000)
        }
        return ()=>clearTimeout(timeId.current)
    },[status,time,saveTime]);

    return <div className='flex center-y'>
        <span>{name}</span>
        <Icon type={status==='start'?'stop':'start'} color='#1890ff' size={32}
              onClick={handleClick}
              style={{'cursor':'pointer'}}
        />
        <span>{timeDis()}</span>
        <Button style={{marginLeft:12}} onClick={reTime}>重置</Button>
    </div>;

    function handleClick() {
        if(status==='stop') return startAction();
        return stopAction();

        function startAction() {
            setStartTime((new Date()).getTime());
            return setStatus('start');
        }

        function stopAction() {
            setSaveTime(time);
            return setStatus('stop');
        }
    }

    function reTime() {
        setStatus('stop');
        setStartTime(null);
        setSaveTime(0);
        setTime(0);
    }

    function timeDis() {
        return dateSymFor(timeFor(),' : ','sec');

        function timeFor() {
            const t = Math.floor(time/1000);
            const hour = Math.floor(t/60/60);
            const min =Math.floor((t - hour*60*60)/60);
            const sec = t - hour*60*60 - min*60;
            return {hour, min, sec};
        }
    }
});
TimeBar.defaultProps = {
    name:'默认名称'
};

function TotalTimeUtils(props) {
    return <Container header='计时工具'>
        <TimeBar name='编程实践'/>
        <TimeBar/>
        <TimeBar/>
        <TimeBar/>
        <TimeBar/>
        <TimeBar/>
    </Container>;
}

export default TotalTimeUtils;

//逻辑流程
//开始
//1. 点击开始，记录startTime【时间戳】，修改计时状态为`start`
//2. 判断，如果此时计时状态为`start`，则开启计时器，计时器每隔1000ms执行一次回调
//2.1 回调计算当前时间与startDate时间差【leadTime】，将leadTime与saveTime之和存入time状态变量
//3. time格式化后显示

//停止
//1. 点击暂停，saveTime记录当前time状态变量，time清零，修改状态为`stop`