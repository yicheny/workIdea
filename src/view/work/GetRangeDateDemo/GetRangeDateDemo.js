import React from 'react';
import {Container} from "../../../component";

function GetRangeDateDemo(props) {
    return <Container header='GetRangeDateDemo'>
        <div>{GetRangeDate(0)}</div>
        <div>{GetRangeDate(+1)}</div>
        <div>{GetRangeDate(+12)}</div>
        <div>{GetRangeDate(-1)}</div>
        <div>{GetRangeDate(-12)}</div>
    </Container>;

    function GetRangeDate(skip) {
        let date = new Date(),
            year = date.getFullYear(),
            day = date.getDate(),
            month = date.getMonth()+1;

        if(skip!==0){
            year = year + Math.floor(skip/12);
            month = (month+skip)%12;
            if(month<0) {
                month=month+12;
            }
        }

        return `${addZero(year)}-${addZero(month)}-${addZero(day)}`;

        function addZero(num) {
            if(num<10) return '0'+num;
            return num;
        }
    }
}

export default GetRangeDateDemo;