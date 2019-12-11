import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import _ from 'lodash';
// import axios from 'axios';

class MyPromise {
    constructor(executor) {
        this.status = 'pending';
        this.params = null;
        this.resolveCB = [];
        this.rejectCB = [];
        if (typeof executor === 'function') executor(this._resolve, this._reject);
    }

    _resolve = (res) => {
        setTimeout(() => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.params = res;
                this.resolveCB.forEach(cb => cb(res));
            }
        }, 0)
    };

    _reject = (err) => {
        setTimeout(() => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.params = err;
                this.rejectCB.forEach(cb => cb(err));
            }
        }, 0)
    };

    then = (onFulfilled, onRejected) => {
        const {status} = this;
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v;
        onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err};

        if(status==='fulfilled') {
            return new MyPromise((resolve,reject)=>{
                setTimeout(()=>{
                    try {
                        MyPromise.resolve(onFulfilled(this.params))
                    }catch (e) {
                        reject(e);
                    }
                },0)
            })
        }
        if(status==='rejected') {
            return new MyPromise((resolve,reject)=>{
                setTimeout(()=>{
                    try {
                        MyPromise.resolve(onRejected(this.params))
                    }catch (e) {
                        reject(e);
                    }
                },0)
            })
        }
        if(status==='pending') return new MyPromise((resolve,reject)=>{
            this.resolveCB.push(()=>{
                try {
                    resolve(onFulfilled(this.params))
                }catch (e) {
                    reject(e);
                }
            });
            this.rejectCB.push(()=>{
                try{
                    reject(onRejected(this.params))
                }catch(e){
                    reject(e);
                }
            });
        })
    };

    static resolve = (value) => {
        return new MyPromise(resolve => resolve(value));
    };

    static reject = (value) => {
        return new MyPromise((resolve, reject) => reject(value));
    }
}

function Demo(props) {
    const p1 = new MyPromise(resolve=>resolve());
    const p2 = new MyPromise(resolve=>resolve());
    p1.then(()=>console.log('p1-1')).then(()=>console.log('p1-2'));
    p2.then(()=>console.log('p2-1')).then(()=>console.log('p2-2'));
    return <div>

    </div>;
}

export default Demo;