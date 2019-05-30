import React, {useState} from 'react';
import {chunk} from "../utils/arrMethod";
import {Icon} from 'antd';
import './Calendar.less';

function DateChange(props) {
    const {date, unit} = props;
    return <p>
        <Icon type='left'/><span>{date}{unit}</span><Icon type='right'/>
    </p>
}

function Calendar() {
    const date = new Date();
    const [year, setYear] = useState(date.getFullYear());
    const [month, setMonth] = useState(date.getMonth() + 1);
    const [day, setDay] = useState(date.getDate());
    const [week, setWeek] = useState(date.getDay());

    const weekList = ['日', '一', '二', '三', '四', '五', '六',];

    const getCurrentWeekStart = () => (new Date(date.getTime() - (date.getDate() - 1) * 1000 * 60 * 60 * 24)).getDay();
    const computeDay = (y, m) => {
        const bigMon = [1, 3, 5, 7, 8, 10, 12];
        if (m === 2) {
            if (y % 100 === 0) return y % 400 ? 28 : 29;
            return y % 4 ? 28 : 29;
        }
        return bigMon.includes(m) ? 31 : 30;
    };
    const getViewMonDay = (date) => {
        date.pop();
        return date.length % 7 ? getViewMonDay(date) : date;
    };

    const weekStart = getCurrentWeekStart();
    const currentMonDay = Array.from(Array(computeDay(year, month)), (x, i) => i + 1);
    const preMonDay = Array.from(Array(computeDay(year, month - 1)), (x, i) => i + 1).slice(-weekStart);
    const viewMonDay = getViewMonDay(preMonDay.concat(currentMonDay).concat([1,2,3,4,5,6,7]));
    // console.log(viewMonDay);
    // console.log(chunk(viewMonDay, 7));
    return <div className='x calendar'>
        <div className="content">
            <div className="header">
                <div className="date">
                    <DateChange date={year} unit='年'/>
                    <DateChange date={month} unit='月'/>
                    <DateChange date={day} unit='日'/>
                </div>
                <div className='week'>星期{weekList[week]}</div>
            </div>
            <div className="panel">
                <div className="panel_header row">
                    {
                        weekList.map((el,i)=><span key={i} className='cell'>{el}</span>)
                    }
                </div>
                <div className='panel_main'>
                    {
                        chunk(viewMonDay, 7).map((el,i)=><div className="row" key={i}>
                            {
                                el.map((el2,i2)=><span key={i2} className='cell'>{el2}</span>)
                            }
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Calendar;