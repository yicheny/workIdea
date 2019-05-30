//自己写的一些数组方法
export function chunk(arr,size=1) {
    // if(size%1!==0) return;//判断是否为整数的一种方法
    if(!Array.isArray(arr) || !Number.isInteger(size*1)) return;
    let oriArr = [...arr],
        newArr = [];

    for(let i=0;i<oriArr.length/size;i++){
        newArr.push(arr.splice(0,size))
    }
    return newArr;
}