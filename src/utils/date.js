import {compare} from "./publicFun";

export function dateSymFor(date,sym='',scope='day') {
    const {year,month,day,hour,min,sec} = date;
    return scopeStrategy(scope);

    function scopeStrategy(key) {
        const scopeStrategyMap = {
            day:setDateUnit([year,month,day],sym),
            sec:setDateUnit([hour,min,sec],sym)
        };
        return scopeStrategyMap[key];

        function setDateUnit(list,sym) {
            return list.reduce((acc, el,i,arg) => {
                return i===arg.length-1 ? `${acc}${addZeroFormat(el)}` : `${acc}${addZeroFormat(el)}${sym}`;
            }, '');

            function addZeroFormat(value) {
                if (value < 10) return '0' + value;
                return value;
            }
        }
    }
}

export function dateUnitFor(date) {
    const {year,month,day} = date;
    return `${year}年${month}月${day}日`
}

export function nowDateItemFor() {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    return {year,month,day,hour,min,sec};
}

export function weekDayFor(date){
    const weekDayIndex = new Date(dateSymFor(date,' ')).getDay();
    const weekMap = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    return weekMap[weekDayIndex];
}

export function changeMonth(date,operate='add'){
    date = {...date};
    const changeMonthStrategy = {
        'add':addOperate,
        'sub': subtractOperate
    };
    changeMonthStrategy[operate]();
    return date;

    function addOperate() {
        date.month++;
        if(date.month>=13){
            date.month=1;
            date.year++;
        }
    }
    function subtractOperate() {
        date.month--;
        if(date.month<=0){
            date.month=12;
            date.year--;
        }
    }
}

//这里与changeMonth部分逻辑重复，待重构
export function changeYear(date,operate='add') {
    date = {...date};
    const changeMonthStrategy = {
        'add':addOperate,
        'sub': subtractOperate
    };
    changeMonthStrategy[operate]();
    return date;

    function addOperate() {
        date.year++
    }
    function subtractOperate() {
        date.year--
    }
}

export function dateCompare(o1,o2) {
    return compare(o1,o2,['year','month','day'])
}
// function dateItemFor(date) {
//     const reg = /([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})/;
//     const match = reg.exec(date);
//     console.log(match);
// }

export function timestampFor() {
    return new Date().getTime();
}
