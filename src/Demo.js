import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
import _ from 'lodash';
// import axios from 'axios';

class MyPromise {
    constructor(callback) {
        this.status = 'pending';
        this.params = null;//用于接收数据
        if(_.isFunction(callback)) callback(this._resolve, this._reject);
    }

    _resolve = (res) => {
        if (this.status === 'pending'){
            this.status = 'fulfilled';
            this.params = res;
        }
    };

    _reject = (err) => {
        if(this.status === 'pending'){
            this.status = 'rejected';
            this.params = err;
        }
    };

    then = (resolve,reject) => {
        const {status,params} = this;

        if(status==='fulfilled'){
            return new MyPromise(nextResolve=>nextResolve(resolve(params)));
        }
        if(status==='rejected'){
            return new MyPromise((nextResolve,nextReject)=>nextReject(reject(params)));
        }

        setTimeout(()=>{
            return this.then(resolve,reject)
        },0);

        return this;
    }
}

function Demo(props) {
    //测试部分
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
        return '成功';
    },(err)=>{
        console.error('异步执行失败啦！',err);
        return '失败';
    }).then((res)=>{
        console.log('异步执行成功啦2！',res);
    },(err)=>{
        console.error('异步执行失败啦2！',err);
    });
    console.log('B');
    return <div>

    </div>;
}

export default Demo;