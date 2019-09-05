import React,{useState} from 'react';
import {last} from '../../utils/publicFun';
import {nowDateItemFor, dateSymFor, dateUnitFor,weekDayFor,changeMonth} from '../../utils/date'
import {Button} from "../index";

function Calendar(props) {
    const [date,setDate] = useState(nowDateItemFor('addZero'));
    dateTableFor();
    // printInfo();

    return <div className="x_calendar">
        <div className="x_calendar_header">
            <div>{dateUnitFor(date)}</div>
            <div>{weekDayFor(dateSymFor(date,' '))}</div>
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
        console.log(weekDayFor(dateSymFor(date,' ')));
    }

    function dateTableFor() {
        const preDate = changeMonth(date,'sub');
        const nextDate = changeMonth(date,'add');
        const preDayList = genDayList(preDate.month).slice(startDayFor()*-1);//startDayFor()为0时有问题
        const curDayList = genDayList(date.month);
        const nextDayList = genDayList(nextDate.month).slice(0,endDayFor());
        const dateTableList = preDayList.concat(curDayList).concat(nextDayList);

        console.log(preDayList, curDayList, nextDayList);
        // console.log(dateTableList);


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
        function startDayFor() {
            return weekDayIndexFor({...date,day:1})
        }
        function endDayFor() {
            return weekDayIndexFor({...date,day:last(curDayList)})
        }
        function weekDayIndexFor(date) {
            const startDate = dateSymFor(date,' ');
            return new Date(startDate).getDay();
        }
    }
}

export default Calendar;