import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import _ from 'lodash';
// import axios from 'axios';
import _ from 'lodash/fp';

function Demo(props) {
    function compose(...funcs) {
        if (funcs.length === 0) return arg => arg;
        if (funcs.length === 1) return funcs[0];
        return funcs.reduce((a, b) => (...args) => a(b(...args)))
    }

    // const Maybe = function (x) {
    //     this.__value = x;
    // };
    // Maybe.of = x=>new Maybe(x);
    // Maybe.prototype.isNothing = function () {
    //     return (this.__value === null || this.__value === undefined);
    // };
    // Maybe.prototype.map = function (f) {
    //     return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
    // };


    return <div>

    </div>;
}

export default Demo;