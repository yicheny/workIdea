import React from 'react';
import {Container} from "../../../component";

function GetRangeDateDemo(props) {
    return <Container header='GetRangeDateDemo'>
        {GetRangeDate(0)}
        {/*{GetRangeDate(-1)}*/}
        {/*{GetRangeDate(+1)}*/}
        {/*{GetRangeDate(+12)}*/}
        {/*{GetRangeDate(-12)}*/}
    </Container>;

    function GetRangeDate(skip) {
        let date = new Date(),
            year = date.getFullYear(),
            day = date.getDate(),
            month = date.getMonth()+1;

        if(skip>0){
            year = year + Math.floor(skip/12);
            month = (month+skip)%12;
            console.log(year, month);
        }

        if(skip<0){

        }

        return `${addZero(year)}-${addZero(month)}-${addZero(day)}`;

        function addZero(num) {
            if(num<10) return '0'+num;
            return num;
        }
    }
}

export default GetRangeDateDemo;