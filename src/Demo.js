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
    function getData(callback) {
        const delay = _.random(0,100);
        setTimeout(()=>{
            return callback(delay)
        },delay);
    }

    // const promise = new MyPromise((resolve, reject) => {
    //     getData(x=>{
    //         if(x>50) return resolve(x);
    //         return reject(x);
    //     });
    // });

    const p = new Promise(resolve => resolve(42));
    p.then(function fulfilled(res) {
        try{
            res()//注意：这里数字42这样调用，会报错
        }catch(e){
         console.error('成功捕捉错误',e)
        }
    },function rejected(err) {
        console.error(err);//错误信息并没有被传到这里
    });
    /*p.then(function fulfilled(res) {
        res();//注意：这里数字42这样调用，会报错
    },function rejected(err) {
        console.error(err);//错误信息并没有被传到这里
    }).catch((err)=>{
        console.error('catch捕捉到错误',err)
    });*/

    return <div>

    </div>;
}

export default Demo;