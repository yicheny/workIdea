import React, {useState} from 'react';
import './CalendarTable.less';
import {chunk, mergeCn,compare} from '../../utils/publicFun';

function WeekItem(props) {
    const {data,handleClick} = props;
    return <div className="calendarTable_rowItem flex">
        {data.map((el,i)=><Cell key={i} date={el} onClick={handleClick}/>)}
    </div>
}

function Cell(props) {
    const {cellMain,date,onClick} = props;
    const cn = mergeCn("calendarTable_cell",cellMain,date.isCurMonth||'noCurMonth',date.isCurDay&&'curDay',date.isSelected&&'selected');

    return <div className={cn} onClick={(e)=>onClick(e,date)}>
        {date.day}
    </div>
}
Cell.defaultProps={
    cellMain:'cellMain',
    date:{}
};

function CalendarTableHeader(props) {
    return <div className="calendarTable_header calendarTable_rowItem flex">
        {props.data.map((el,i)=><Cell value={el} key={i} cellMain=''/>)}
    </div>
}

function CalendarTable(props) {
    const [data,setData] = useState(props.data);

    return (
        <div className='calendarTable'>
            <CalendarTableHeader data={weekTitsFor()}/>
            <div className="calendarTable_content">
                {chunk(data,7).map((week,i)=><WeekItem data={week} key={i} handleClick={(e,o)=>handleClick(e,o)}/>)}
            </div>
        </div>
    );

    function weekTitsFor() {
        return ['日','一','二','三','四','五','六'];
    }

    function handleClick(e,o) {
        data.forEach((el,i)=>{
            if(compare(el,o,['year','month','day'])) return el.isSelected = true;
            el.isSelected = false;
        });
        setData([...data]);
    }
}

export default CalendarTable;