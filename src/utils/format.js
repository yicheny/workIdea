export function numFormat(value,format='N2') {
    if (format === 'N2') return customFormat(value.toFixed(2));
    if (format === 'N4') return customFormat(value.toFixed(4));
    return console.error('numFormat函数参数错误');

    function customFormat(sNum) {
        let sNumParts = sNum.split('.');
        sNumParts[0] = sNumParts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        return sNumParts.join('.');
    }
}

