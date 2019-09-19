import React, {useEffect, useState, useRef} from 'react';
import {Progress} from "../../component";
import {numFormat} from "../../utils/format";
import {timestampFor} from "../../utils/date";
import './CountDown.less';

function CountDown(props) {
    const [residueTime,setResidueTime] = useState(props.time*1000);
    const allTime = props.time * 1000;
    const startTime = useRef(timestampFor());

    useEffect(()=>{
        window.requestAnimationFrame(()=>{
            const leadTime = timestampFor() - startTime.current;
            const newResidueTime = allTime - leadTime;
            if(newResidueTime <= 0) return setResidueTime(0);
            setResidueTime(newResidueTime)
        })
    },[residueTime]);

    return <div className='countDownProgress flex center'>
        <Progress percent={percentFor()} wrapHeight={20}/>
        <div className='countDown_text'>{secToDate(residueTime)}</div>
    </div>;

    function percentFor() {
        return Math.round((residueTime / allTime)*100);
    }
    function secToDate(date,prec='sec') { //默认传入date为毫秒级
        date = date/1000;
        if(!check()) return null;
        return formatDate();

        function check() {
            const checkStrategy = {
                sec:()=>checkRange(100),
                min:()=>checkRange(60*99+59)
            };
            return checkStrategy[prec]();

            function checkRange(max){
                if(date<0 || date >max) return checkRangeHint(0,max);
                return true;

                function checkRangeHint(min,max) {
                    // console.error(`请确保参数value数值范围在${min}-${max}之间`);
                    return false;
                }
            }
        }
        function formatDate() {
            const formatStrategy = {
                sec:()=>{
                    return `${addZeroFormat(numFormat(date))}`
                },
                min:()=>{
                    const min = Math.floor(date/60);
                    const sec = date - min*60;
                    return `${addZeroFormat(min)}:${addZeroFormat(sec)}`
                }
            };
            return formatStrategy[prec]();

            function addZeroFormat(value) {
                if (value < 10) return '0' + value;
                return value;
            }
        }
    }
}
CountDown.defaultProps={
    time:20,
};

export default CountDown;