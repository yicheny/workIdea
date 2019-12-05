import React from 'react';
import './CalendarTable.less';
import {dateCompare} from "../../utils/date";
import {chunk, cls} from '../../utils/publicFun';

function WeekItem(props) {
    const {data,...rest} = props;
    return <div className="calendarTable_rowItem flex">
        {data.map((el,i)=><Cell value={el.day} key={i} date={el} {...rest}/>)}
    </div>
}

function Cell(props) {
    const {value,cellMain,date,click,selectedDate} = props;

    return <div className={cnFor()} onClick={(e)=>click(e,date)}>
        {value}
    </div>;

    function cnFor() {
        return cls("calendarTable_cell", cellMain,
            date.isCurMonth||'noCurMonth',
            date.isCurDay&&'curDay',
            dateCompare(date,selectedDate)&&'selected'
        );
    }
}
Cell.defaultProps={
    cellMain:'cellMain',
    date:{},
    click:()=>{}
};

function CalendarTableHeader(props) {
    return <div className="calendarTable_header calendarTable_rowItem flex">
        {props.data.map((el,i)=><Cell value={el} key={i} cellMain=''/>)}
    </div>
}

function CalendarTable(props) {
    return (
        <div className='calendarTable'>
            <CalendarTableHeader data={weekTitsFor()}/>
            <div className="calendarTable_content">
                {chunk(props.data,7).map((week,i)=>
                    <WeekItem
                        data={week}
                        key={i}
                        click={(e,o)=>props.setDate(o)}
                        selectedDate={props.selectedDate}
                    />)}
            </div>
        </div>
    );

    function weekTitsFor() {
        return ['日','一','二','三','四','五','六'];
    }
}

export default CalendarTable;