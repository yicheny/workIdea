import React from 'react';
import {Container} from "../../../component";

function GetRangeDateDemo(props) {
    return <Container header='GetRangeDateDemo'>
        {/*<div>{GetRangeDate(0)}</div>*/}
        <div>{GetRangeDate(+1)}</div>
        <div>{GetRangeDate(+2)}</div>
        <div>{GetRangeDate(+3)}</div>
        <div>{GetRangeDate(+4)}</div>
        <div>{GetRangeDate(+5)}</div>
        <div>{GetRangeDate(+6)}</div>
        <div>{GetRangeDate(+7)}</div>
        <div>{GetRangeDate(+8)}</div>
        <div>{GetRangeDate(+9)}</div>
        <div>{GetRangeDate(+10)}</div>
        <div>{GetRangeDate(+11)}</div>
        <div>{GetRangeDate(+12)}</div>
        <div>{GetRangeDate(-1)}</div>
        <div>{GetRangeDate(-2)}</div>
        <div>{GetRangeDate(-3)}</div>
        <div>{GetRangeDate(-4)}</div>
        <div>{GetRangeDate(-5)}</div>
        <div>{GetRangeDate(-6)}</div>
        <div>{GetRangeDate(-7)}</div>
        <div>{GetRangeDate(-8)}</div>
        <div>{GetRangeDate(-9)}</div>
        <div>{GetRangeDate(-10)}</div>
        <div>{GetRangeDate(-11)}</div>
        <div>{GetRangeDate(-12)}</div>
    </Container>;

    function GetRangeDate(skip=0) {
        let date = new Date(),
            year = date.getFullYear(),
            day = date.getDate(),
            // day = 31,
            month = date.getMonth();

        if(skip!==0){
            year = year + Math.floor((month+skip)/12);
            month = (month+skip)%12;
            if(month<0) {
                month=month+12;
            }
            day = dayFor();
        }

        return `${year}-${addZero(month+1)}-${addZero(day)}`;

        function addZero(num) {
            if(num<10) return '0'+num;
            return num;
        }

        function dayFor() {
            if(day>maxDaysFor()) return maxDaysFor();
            return day;

            function maxDaysFor() {
                return maxDaysListFor()[month];

                function maxDaysListFor(){
                    const monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
                    const leapMonthDays = [31,29,31,30,31,30,31,31,30,31,30,31];
                    return isLeapYear() ? leapMonthDays : monthDays;

                    function isLeapYear() {
                        if(!(year%100)) return !(year%400);
                        return !(year%4);
                    }
                }
            }
        }
    }
}

export default GetRangeDateDemo;