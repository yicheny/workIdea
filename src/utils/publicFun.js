export function sleep(ms) {
    return new Promise(reslove=>setTimeout(reslove,ms))
}

export function mergeCn(...cns) {
    return [...cns].join(' ')
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

export function setObj(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return [keys,values]
}

export function getName(names={}) {
    const data = {...names};
    const [keys,values] = setObj(data);
    let res = keys.filter((el,i)=>values[i]);
    if(res.length) return res;
    return [''];
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

