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

    catch = (onRejected)=>{
        return this.then(null,onRejected);
    };

    static resolve = (value) => {
        return new Promise(resolve => resolve(value));
    };

    static reject = (value) => {
        return new Promise((resolve, reject) => reject(value));
    };

    static all = (list)=> {
        return new Promise((resolve,reject)=>{
            const evts = [];
            if(evts.length===list.length) return resolve(evts);
            list.forEach((el,i)=>{
                el.then(res=>{
                    evts[i]=res;
                    if(evts.filter((_,i)=>i in evts).length===list.length) return resolve(evts);
                },reject);
            });
        })
    };

    static race = (list)=> {
        return new Promise((resolve,reject)=>{
            list.forEach((el)=>{
                el.then(resolve,reject);
            });
        })
    }
}

function Demo(props) {
    function getData(callback,delay) {
        delay = delay || Math.round(Math.random()*100);
        setTimeout(()=>{
            callback(delay);
        },delay)
    }

    const p1 = new Promise(resolve => getData(resolve,100));
    const p2 = new Promise((resolve,reject) => getData((d)=>{
        if(d>50) return resolve(d);
        return reject(d)
    }));
    const p3 = new Promise(resolve => getData(resolve,300));

    Promise.race([p1,p2,p3]).then(res=>{
        console.log(res);
    }).catch(err=>{
        console.error(err);
    });

    return <div>

    </div>;
}

export default Demo;