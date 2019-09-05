//延时——需搭配异步使用
export function sleep(ms) {
    return new Promise(reslove=>setTimeout(reslove,ms))
}

//用于合并类名【这里指标签类名】
export function mergeCn(...cns) {
    return cns.join(' ')
}

//将数组打乱顺序——洗牌/抽牌算法
export function shuffle(array) {
    const newArray = [];

    while(array.length){
        const index = Math.random()*array.length;
        const item = array.splice(index,1)[0];
        newArray.push(item);
    }

    return newArray;
}

//返回一个对象的keys数组和values数组
export function setObj(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return [keys,values]
}

//返回一个数组中所有值为真值的变量名
export function getName(names={}) {
    const data = {...names};
    const [keys,values] = setObj(data);
    let res = keys.filter((el,i)=>values[i]);
    if(res.length) return res;
    return [''];
}

//数组切片
export function chunk(arr,size=1) {
    let oriArr = [...arr],
        newArr = [];

    while(oriArr.length){
        newArr.push(oriArr.splice(0,size))
    }
    return newArr;
}

//随机返回数组中的一个值
export function arrRandom(array) {
    if (!array.length) return null;
    const index = Math.floor(Math.random()*array.length);
    return array[index];
}

//返回数组最后一项
export function last(array) {
    return array[array.length-1];
}

// export function setMap(map) {
//     function get(key) {
//         return map[key];
//     }
//     function set(key,value){
//         map[key] = value;
//     }
//     return [get,set];
// }

