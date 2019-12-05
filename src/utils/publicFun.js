//延时——需搭配异步使用
export function sleep(ms) {
    return new Promise(reslove => setTimeout(reslove, ms))
}

//用于合并类名【这里指标签类名】
export function cls(...cns) {
    const res = cns.reduce((acc, el) => {
        if (isObject(el)) {
            acc = acc.concat(getTrue(el))
        }
        if (isString(el)) {
            acc.push(el);
        }
        if (isNumber(el)){
            acc.push(el.toString());
        }
        return acc;
    }, []);

    return res.filter(el => !!el).join(' ')
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

//返回一个数组中所有值为真值的变量名_待优化
export function getTrue(names = {}) {
    const data = {...names};
    const [keys, values] = [Object.keys(data),Object.values(data)];
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
export function omit(obj, keys = []) {
    const res = {};
    Object.keys(obj).forEach((key) => {
        if (!keys.includes(key)) return res[key] = obj[key];
    });
    return res;
}

//返回数据类型
export function typeFor(value) {
    let dataType = Object.prototype.toString.call(value);
    dataType = dataType.slice(8, dataType.length - 1);
    return dataType;
}

//检测数据类型是否和预想的相同
function checkType(value, typeList) {
    return typeList.includes(typeFor(value));
}

//检测值是否是函数
export function isFunction(value) {
    return checkType(value, ['Function'])
}

//检测值是否是对象
export function isObject(value) {
    return checkType(value, ['Null', 'Function', 'Object', 'Array']);
}

//检测值是否是数字
export function isNumber(value) {
    return checkType(value, ['Number']);
}

//检测值是否是字符串
export function isString(value) {
    return checkType(value, ['String']);
}

//返回一个 可以循环返回数组项的函数
export function genListCyclic(list) {
    let count = 0;
    return function () {
        const len = list.length;
        const index = count % len;
        count++;
        return list[index]
    }
}

//检测值是否是null/undefined/''
export function isNil(value) {
    return [null, undefined, ''].includes(value);
}

//浅拷贝
export function clone(o) {
    const res = {};
    for (let key in o) {
        res[key] = o[key];
    }
    return res;
}

//深拷贝
export function cloneDeep(source,clones=new WeakMap()) {
    if(!checkType(source,['Object','Array','Map','Set'])) return source;

    if(clones.has(source)){
        return `Circular：此项循环引用，注意！`;
    }
    clones.set(source,undefined);

    if(checkType(source,['Object'])) return objClone();
    if(checkType(source,['Array'])) return arrClone();
    if(checkType(source,['Map'])) return mapClone();
    if(checkType(source,['Set'])) return setClone();

    function objClone() {
        const res = {};
        for(let key in source){
            res[key] = cloneDeep(source[key],clones)
        }
        return res;
    }
    function arrClone() {
        const res = [];
        for(let key in source){
            res[key] = cloneDeep(source[key],clones)
        }
        return res;
    }
    function mapClone() {
        const res = new Map();
        source.forEach((value,key)=>{
            res.set(key,cloneDeep(value,clones));
        });
        return res;
    }
    function setClone(){
        const res = new Set();
        source.forEach(value=>{
            res.add(cloneDeep(value,clones))
        });
        return res;
    }
}

//生成一个限定范围的随机整数
export function genRandom(min, max) {
    const count = max - min;
    return Math.round(Math.random() * count + min)
}

//数组去重
export function uniq(ary) {
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
export function arrCompare(list1, list2) {
    if (list1.length !== list2.length) return false;

    list1 = uniq(list1);
    list2 = uniq(list2);
    if (list1.length !== list2.length) return false;

    return list1.every((item) => list2.includes(item));
}

//判断两个数组中的项是否完全相等【关注顺序】
export function arrCompareOrder(list1, list2) {
    if (list1.length !== list2.length) return false;
    return list1.every((el, i) => el === list2[i])
}

//将数组根据特定的属性项分类
//注：数组项必须为对象
export function markGroup(data,flag){
    const res = {};

    data.forEach((item,i)=>{
        if(!res.hasOwnProperty(item.version)) return res[item.version] = [item];
        res[item.version].push(item);
    });

    return res;
}

//将数组根据特定的属性项排序
//注：数组项必须为对象
export function sortBy(arr, key, order = "pos"){
    let res = [...arr];
    res.sort(function (a,b) {
        if (order === "pos") { //正序,从小到大
            return a[key] - b[key];
        }
        if (order === "inv") {
            return b[key] - a[key];//逆序,从大到小
        }
        return console.error('sortBy方法参数错误');
    });

    return res;
}