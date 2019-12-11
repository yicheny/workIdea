import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import _ from 'lodash';
// import axios from 'axios';

class Promise {
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
    
    resolvePromise = (x,nextP,resolve,reject)=>{
        if(x===nextP){
            return reject(new TypeError('promise对象循环引用'));
        }

        if(x instanceof Promise){
            if(x.status==='pending'){
                x.then(v=>{
                    this.resolvePromise(v,nextP,resolve,reject);
                },reject)
            }else{
                x.then(resolve,reject);
            }
        }

        if((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))){
            let called = false;
            try {
                const then = x.then;
                if(typeof then === 'function'){
                    then.call(x,y=>{
                        if(called) return;
                        called = true;
                        return this.resolvePromise(y,nextP,resolve,reject);
                    },r=>{
                        if(called) return;
                        called = true;
                        return reject(r);
                    })
                }else{
                    return resolve(x)
                }
            }catch(e){
                if(called) return;
                called = true;
                return reject(e);
            }
        }else{
            resolve(x)
        }
    };

    then = (onFulfilled, onRejected) => {
        const {status} = this;
        let nextP = null;
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v;
        onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err};

        if(status==='fulfilled') {
            return nextP = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    try {
                        const x = onFulfilled(this.params);
                        this.resolvePromise(x,nextP,resolve,reject);
                    }catch (e) {
                        reject(e);
                    }
                },0)
            })
        }
        if(status==='rejected') {
            return nextP = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    try {
                        const x = onRejected(this.params);
                        this.resolvePromise(x,nextP,resolve,reject);
                    }catch (e) {
                        reject(e);
                    }
                },0)
            })
        }
        if(status==='pending') return nextP = new Promise((resolve,reject)=>{
            this.resolveCB.push(()=>{
                try {
                    const x = onFulfilled(this.params);
                    this.resolvePromise(x,nextP,resolve,reject);
                }catch (e) {
                    reject(e);
                }
            });
            this.rejectCB.push(()=>{
                try{
                    const x = onRejected(this.params);
                    this.resolvePromise(x,nextP,resolve,reject);
                }catch(e){
                    reject(e);
                }
            });
        })
    };

    static resolve = (value) => {
        return new Promise(resolve => resolve(value));
    };

    static reject = (value) => {
        return new Promise((resolve, reject) => reject(value));
    }
}

function Demo(props) {
    const p1 = new Promise(resolve=>resolve());
    const p2 = new Promise(resolve=>resolve());
    p1.then(()=>console.log('p1-1')).then(()=>console.log('p1-2'));
    p2.then(()=>console.log('p2-1')).then(()=>console.log('p2-2'));
    return <div>

    </div>;
}

export default Demo;