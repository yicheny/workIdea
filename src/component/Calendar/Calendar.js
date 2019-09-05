import React,{useState} from 'react';
import {last} from '../../utils/publicFun';
import {nowDateItemFor, dateSymFor, dateUnitFor,weekDayFor,changeMonth} from '../../utils/date'

import {Button} from "../index";
function Calendar(props) {
    const [date,setDate] = useState(nowDateItemFor('addZero'));
    // console.log(dateTableFor());
    // printInfo();

    return <div className="x_calendar">
        <div className="x_calendar_header">
            <div>{dateUnitFor(date)}</div>
            <div>{weekDayFor(date)}</div>
            <Button onClick={()=>setDate(changeMonth(date, 'add'))}>加一个月</Button>
            <Button onClick={()=>setDate(changeMonth(date,'sub'))}>减一个月</Button>
        </div>
        <div className="x_calendar_content">

        </div>
    </div>;

    function printInfo() {
        console.log(date);
        console.log(dateSymFor(date,'-'));
        console.log(dateSymFor(date));
        console.log(dateUnitFor(date));
        console.log(weekDayFor(date));
    }

    function dateTableFor() {
        return {
            preDayList:preDayListFor(),
            curDayList:genDayList(date.month),
            nextDayList:nextDayListFor()
        };

        function preDayListFor() {
            const preDate = changeMonth(date,'sub');
            const startIndex = weekDayIndexFor({...date,day:1});
            if(!startIndex) return [];
            return genDayList(preDate.month).slice(startIndex*-1);
        }
        function nextDayListFor() {
            const nextDate = changeMonth(date,'add');
            const endIndex = weekDayIndexFor({...date,day:last(genDayList(date.month))});
            return genDayList(nextDate.month).slice(0,endIndex);
        }
        function genDayList(month){
            const days = monthCountFor(month);
            return Array.from(Array(days),(el,i)=>i+1);

            function monthCountFor(month){
                const index = --month;
                return monthCountListFor()[index];

                function monthCountListFor(){
                    const monthCountList = [31,28,31,30,31,30,31,31,30,31,30,31];
                    const leapYearMonthCountList = [31,28,31,30,31,30,31,31,30,31,30,31];
                    return isLeapYear(date.year) ? leapYearMonthCountList : monthCountList;

                    function isLeapYear(year) {
                        if(!(year%100)) return !(year%400);
                        return !(year%4);
                    }
                }
            }
        }
        function weekDayIndexFor(date) {
            return new Date(dateSymFor(date,' ')).getDay();
        }
    }
}

export default Calendar;