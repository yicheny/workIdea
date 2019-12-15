import React from 'react';
// import * as ylf from 'ylf_public_fun/publicFun';
// import _ from 'lodash';
// import axios from 'axios';

function Demo(props) {
    function request(url,cb) {
        const delay = Math.round(Math.random()*100);
        let err = null;
        let data = null;
        console.log('正在请求数据中...',url);

        setTimeout(()=>{
            if(delay>50){
                err='请求出错'+delay
            }else{
                data = '请求成功'+delay;
            }
            return cb(err,data);
        },delay);
    }
    function printData(err,data){
        if(err){
            it.throw(err);
        }else{
            it.next(data);
        }
    }
    function *gen(){
        try{
            const res = yield request('mockUrl',printData);
            console.log(res);
        }catch (e) {
            console.error(e);
        }
    }

    const it = gen();
    it.next();

    return <div>

    </div>;
}

export default Demo;