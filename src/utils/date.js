export function dateSymFor(date,sym='') {
    const {year,month,day} = date;
    return setDateUnit([year,month,day]);

    function setDateUnit(list) {
        const date = list.reduce((acc, el) => `${acc}${addZeroFormat(el)}${sym}`, '');
        if (!sym) return date;
        return date.slice(0,-1);

        function addZeroFormat(value) {
            if (value < 10) return '0' + value;
            return value;
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
    const minute = date.getMinutes();
    const sec = date.getSeconds();
    return {year, month, day, hour, minute, sec};
}

export function weekDayFor(date){
    const weekDayIndex = new Date(dateSymFor(date,' ')).getDay();
    const weekMap = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    return weekMap[weekDayIndex];
}

export function changeMonth(date,operate='add'){
    date = {...date};
    const changeMonthStragegy = {
        'add':addOperate,
        'sub': subtractOperate
    };
    changeMonthStragegy[operate]();
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

// function dateItemFor(date) {
//     const reg = /([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})/;
//     const match = reg.exec(date);
//     console.log(match);
// }