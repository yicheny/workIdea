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
            return new MyPromise(onFulFilled=>onFulFilled(resolve(params)));
        }
        if(status==='rejected'){
            return new MyPromise((onFulFilled,onRjected)=>onRjected(reject(params)));
        }

        setTimeout(()=>{
            return this.then(resolve,reject)
        },0);

        return this;
    }
}

function Demo(props) {
    const promise = new Promise(resolve=>resolve('结果1'));

    promise.then(res=>{
        console.log(res);
        // return aaa;//aaa未定义
    },()=>{

    }).then(res=>{

    },err=>{
        console.error('成功捕获错误', err);
        return '结果2'
    }).then(res=>{
        console.log(res)
    });

    return <div>

    </div>;
}

export default Demo;