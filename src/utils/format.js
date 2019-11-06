import {isNumber} from "./publicFun";

export function numFormat(value,format='N2') {
    if(!isNumber(value)) return '-';

    if (format === 'N2') return customFormat(value.toFixed(2));
    if (format === 'N4') return customFormat(value.toFixed(4));
    if (format === 'P2') return customFormat((value*100).toFixed(2).concat('%'));
    return console.error('numFormat函数参数错误');

    function customFormat(sNum) {
        let sNumParts = sNum.split('.');
        sNumParts[0] = sNumParts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        return sNumParts.join('.');
    }
}

export function N2(value){
    return numFormat(value,'N2')
}

export function N4(value){
    return numFormat(value,'N4')
}

export function P2(value){
    return numFormat(value,'P2')
}

