import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
import _ from 'lodash';
// import axios from 'axios';

//Promise是一个内置函数，可以通过`new Promise`的方式去调用，也可以通过API调用，例如`Promise.resolve`、`Promise.all`这些
//通过`new Promise()`方式调用时，接受一个形如`(resolve,reject)=>{}`的回调函数，这个回调函数是同步执行的，我们在这个回调函数里定义承诺的内容，包括成功的承诺与失败的承诺
//`Promise`实例对象有三种状态`pending`、`fulfilled`、`rejected`，初始状态为`pending`，一旦更改为`fulfilled`或`reject`就不能在修改
//`then`方法接受两个回调，第一个回调在`fulfilled`状态时执行，第二个状态在`rejected`状态执行，只有有一个被执行，且只会执行一次。

class MyPromise {
    constructor(callback) {
        this.status = 'pending';
        this.value = null;//这个属性用于接收数据
        if(_.isFunction(callback)) callback(this._resolve, this._reject);
    }

    _resolve = (res) => {
        if (this.status === 'pending'){
            this.status = 'fulfilled';
            this.value = res;
        }
    };

    _reject = (err) => {
        if(this.status === 'pending'){
            this.status = 'rejected';
            this.value = err;
        }
    };

    then = (resolve,reject) => {
        const {status,value} = this;

        setTimeout(()=>{
            if(status==='fulfilled'){
                if(_.isFunction(resolve)) return resolve(value);
            }
            if(status==='rejected'){
                if(_.isFunction(reject)) return reject(value);
            }
            if(status==='pending'){
                this.then(resolve,reject);
            }
        },0)
    }
}

function Demo(props) {
    function getData(callback) {
        const delay = _.random(0,100);
        setTimeout(()=>{
            return callback(delay)
        },delay);
    }

    const promise = new MyPromise((resolve, reject) => {
        getData(x=>{
            if(x>50) return resolve(x);
            return reject(x);
        });
    });

    console.log('A');
    promise.then((res)=>{
        console.log('异步执行成功啦！',res);
    },(err)=>{
        console.error('异步执行失败啦！',err);
    });
    console.log('B');
    return <div>

    </div>;
}

export default Demo;