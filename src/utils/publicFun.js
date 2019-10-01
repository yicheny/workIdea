//延时——需搭配异步使用
export function sleep(ms) {
    return new Promise(reslove => setTimeout(reslove, ms))
}

//用于合并类名【这里指标签类名】
export function mergeCn(...cns) {
    return cns.filter(el => !!el).join(' ')
}

//将数组打乱顺序——洗牌/抽牌算法
export function shuffle(array) {
    const newArray = [];

    while (array.length) {
        const index = Math.random() * array.length;
        const item = array.splice(index, 1)[0];
        newArray.push(item);
    }

    return newArray;
}

//返回一个对象的keys数组和values数组
export function setObj(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return [keys, values]
}

//返回一个数组中所有值为真值的变量名
export function getName(names = {}) {
    const data = {...names};
    const [keys, values] = setObj(data);
    let res = keys.filter((el, i) => values[i]);
    if (res.length) return res;
    return [''];
}

//数组切片
export function chunk(arr, size = 1) {
    let oriArr = [...arr],
        newArr = [];

    while (oriArr.length) {
        newArr.push(oriArr.splice(0, size))
    }
    return newArr;
}

//随机返回数组中的一个值
export function arrRandom(array) {
    if (!array.length) return null;
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

//返回数组最后一项
export function last(array) {
    return array[array.length - 1];
}

//两个对象针对指定属性进行对比，全部相同时才返回true
export function compare(o1, o2, keys) {
    if (!o1 || !o2) return false;
    return keys.every((el) => o1[el] === o2[el]);
}

//删除数组指定项--不会改变原数组
export function delArrItem(array, item) {
    array = [...array];

    if (!array.includes(item)) return array;
    array.splice(array.indexOf(item), 1);
    return array;
}

//获取对象指定项组成的新对象
export function pick(obj, keys) {
    const res = {};
    keys.forEach((key) => {
        res[key] = obj[key]
    });
    return res;
}

//数组对象按指定项排序
//desc-降序【默认】,asc-升序
export function orderBy(list, key, order = 'desc') {
    list = [...list];

    list.sort((a, b) => {
        if (order === 'desc') {
            return b[key] - a[key];
        }
        if (order === 'asc') {
            return a[key] - b[key];
        }
        return console.error('参数order传入错误')
    });

    return list;
}

//返回一个由忽略属性之外属性所组成的对象
export function omit(obj,keys=[]){
    const res = {};
    Object.keys(obj).forEach((key)=>{
        if(!keys.includes(key)) return res[key] = obj[key];
    });
    return res;
}

//检测值的数据是否和预想的相同
export function checkType(value,type){
    let dataType = Object.prototype.toString.call(value);
    dataType = dataType.slice(8,dataType.length-1);
    return type===dataType;
}

//检测值是否是函数
export function isFunction(value){
    return checkType(value,'Function')
}

//返回一个 可以循环返回数组项的函数
export function genListCyclic() {
    let count = 0;
    return function (list) {
        const len = list.length;
        const index = count%len;
        count++;
        return list[index]
    }
}
