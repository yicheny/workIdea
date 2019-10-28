//延时——需搭配异步使用
export function sleep(ms) {
    return new Promise(reslove => setTimeout(reslove, ms))
}

//用于合并类名【这里指标签类名】
export function mergeCn(...cns) {
    return cns.filter(el => !!el).join(' ')
}

export function cls(common,obj) {
    return mergeCn(common,...getName(obj))
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
export function sample(array) {
    if (!array.length) return null;
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

//返回数组或字符串最后一项
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

//返回数据类型
export function typeFor(value) {
    let dataType = Object.prototype.toString.call(value);
    dataType = dataType.slice(8,dataType.length-1);
    return dataType;
}

//检测数据类型是否和预想的相同
function checkType(value,typeList){
    return typeList.includes(typeFor(value));
}

//检测值是否是函数
export function isFunction(value){
    return checkType(value,['Function'])
}

//检测值是否是对象
export function isObject(value) {
    return checkType(value,['Null','Function','Object','Array']);
}

//检测值是否是数字
export function isNumber(value) {
    return checkType(value,['Number']);
}

//返回一个 可以循环返回数组项的函数
export function genListCyclic(list) {
    let count = 0;
    return function () {
        const len = list.length;
        const index = count%len;
        count++;
        return list[index]
    }
}

//检测值是否是null/undefined/''
export function isNil(value) {
    return [null,undefined,''].includes(value);
}

//浅拷贝
export function clone(o) {
    const res = {};
    for(let key in o){
        res[key] = o[key];
    }
    return res;
}

//深拷贝
export function cloneDeep() {

}

//生成一个限定范围的随机整数
export function genRandom(min,max) {
    const count = max-min;
    return Math.round(Math.random()*count + min)
}

//数组去重
export function uniq(ary){
    let newAry = [...ary];

    newAry.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < newAry.length - 1; i++) {
        if (newAry[i] === newAry[i + 1]) {
            newAry.splice(i, 1);
            i--;
        }
    }

    return newAry;
}

//判断两个数组中的项是否完全相等【不关注顺序】
export function arrCompare(list1,list2) {
    if(list1.length !== list2.length) return false;

    list1 = uniq(list1);
    list2 = uniq(list2);
    if(list1.length !== list2.length) return false;

    return list1.every((item)=>list2.includes(item));
}

//判断两个数组中的项是否完全相等【关注顺序】
export function arrCompareOrder(list1,list2) {
    if(list1.length !== list2.length) return false;
    return list1.every((el,i)=>el===list2[i])
}