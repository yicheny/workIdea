import React from 'react';

function cloneDeep(source,clones=new WeakMap()) {
    if(!checkTypes(source,['Object','Array','Map','Set'])) return source;

    if(clones.has(source)){
        return `Circular：此项循环引用，注意！`;
    }
    clones.set(source,undefined);

    if(checkType(source,'Object')) return objClone();
    if(checkType(source,'Array')) return arrClone();
    if(checkType(source,'Map')) return mapClone();
    if(checkType(source,'Set')) return setClone();

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
    function checkType(value, type=null) {
        let dataType = Object.prototype.toString.call(value);
        dataType = dataType.slice(8, dataType.length - 1);
        return type===dataType;
    }
    function checkTypes(value,types) {
        return types.some(type=>checkType(value,type));
    }
}

function BaseDemo(props) {
    const mockData = {
        name:'ylf',
        obj:{
            children1:{
                num:111,
                children2:{
                    num:444
                }
            },
        },
        arr:[1,2,3,4,5],
        mockMap:new Map([['name','hahaha'],['height',1231]]),
        mockSet:new Set([1,3,3,6,6,6,4,56]),
        num:1111,
        mockBean:false,
        money:null,
        f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
        fun:()=>{
            console.log('dddd')
        }
    };

    mockData.abc = mockData;
    const newData = cloneDeep(mockData);
    console.log(newData);
    console.log(newData===mockData);
    console.log(newData.arr === mockData.arr);
    console.log(newData.obj === mockData.obj);
    return <div></div>
}

export default BaseDemo;