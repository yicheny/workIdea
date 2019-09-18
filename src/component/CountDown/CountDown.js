import React, {useEffect, useState} from 'react';
import {Progress} from "../../component";
import {numFormat} from "../../utils/format";
import './CountDown.less';

function CountDown(props) {
    const initTime = 20;
    const [time,setTime] = useState(initTime);

    useEffect(()=>{
        const timeId = setInterval(()=>{
            if (time<=0) return clearInterval(timeId);
            setTime(Number((time-0.01).toFixed(2)));
        },10);

        return ()=>clearInterval(timeId);
    },[time]);

    return <div className='countDownProgress flex center'>
        <Progress percent={percentFor()} wrapHeight={20}/>
        <div className='countDown_text'>{secToDate(time)}</div>
    </div>;

    function percentFor() {
        return Math.round((time / initTime)*100);
    }
    function secToDate(date,prec='sec') {
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
                    console.error(`请确保参数value数值范围在${min}-${max}之间`);
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

export default CountDown;