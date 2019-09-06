import React from 'react';
import './CalendarTable.less';
import {chunk, mergeCn} from '../../utils/publicFun';
import {nowDateItemFor} from "../../utils/date";

function WeekItem(props) {
    const {data} = props;
    return <div className="calendarTable_rowItem flex">
        {data.map((el,i)=><Cell value={el.value} key={i}/>)}
    </div>
}

function Cell(props) {
    const {value,cellMain} = props;
    const cn = mergeCn("calendarTable_cell",cellMain);

    return <div className={cn}>
        {value}
    </div>
}
Cell.defaultProps={
    cellMain:'cellMain'
};

function CalendarTableHeader(props) {
    return <div className="calendarTable_header calendarTable_rowItem flex">
        {props.data.map((el,i)=><Cell value={el} key={i} cellMain=''/>)}
    </div>
}

function CalendarTable(props) {
    const {data} = props;
    console.log(data);

    return (
        <div className='calendarTable'>
            <CalendarTableHeader data={weekTitsFor()}/>
            {chunk(data,7).map((week,i)=><WeekItem data={week} key={i}/>)}
        </div>
    );

    function weekTitsFor() {
        return ['日','一','二','三','四','五','六'];
    }
}

export default CalendarTable;