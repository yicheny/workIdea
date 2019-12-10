import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import _ from 'lodash';
// import axios from 'axios';

class MyPromise {
    constructor(callback) {
        this.status = 'pending';
        this.params = null;//用于接收数据
        if (typeof callback === 'function') callback(this._resolve, this._reject);
    }

    _resolve = (res) => {
        if (this.status === 'pending') {
            this.status = 'fulfilled';
            this.params = res;
        }
    };

    _reject = (err) => {
        if (this.status === 'pending') {
            this.status = 'rejected';
            this.params = err;
        }
    };

    then = (resolve, reject) => {
        const {status, params} = this;
        let value = null;
        resolve = typeof resolve === 'function' ? resolve : v => v;
        reject = typeof reject === 'function' ? reject : err => {throw err};

        if (status === 'fulfilled') {
            try {
                value = resolve(params);
                if (MyPromise._isPromise(value)) return value;
                return MyPromise.resolve(value);
            } catch (e) {
                return MyPromise.reject(e)
            }
        }
        if (status === 'rejected') {
            try {
                value = reject(params);
                if (MyPromise._isPromise(value)) return value;
                return MyPromise.resolve(value);
            } catch (e) {
                return MyPromise.reject(e)
            }
        }

        setTimeout(() => {
            return this.then(resolve, reject)
        }, 0);

        return this;
    };

    catch = (reject) => {
        return this.then(null, reject);
    };

    static resolve = (value) => {
        return new MyPromise(onFulFilled => onFulFilled(value));
    };

    static reject = (value) => {
        return new MyPromise((onFulFilled, onRjected) => onRjected(value));
    };

    static _isPromise(p) {
        if (p === null) return false;
        if (typeof p !== 'object' && typeof p !== 'function') return false;
        return typeof p.then === 'function';
    }
}

function Demo(props) {
    let promise = new MyPromise((resolve, reject) => {
        resolve('hello')
    })
    promise.then((data) => {
        console.log(data);
        return new MyPromise((resolve, reject) => {
            resolve('👋')
        })
    }, (err) => {
        console.log(err)
    }).then((data) => {
        console.log(data)
    }, (err) => {
        console.log('🙅' + err)
    })

    return <div>

    </div>;
}

export default Demo;