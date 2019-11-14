import React from 'react';

class SingleJob{
    constructor(job){
        this.job=job;
    }

    static instance = [];

    //注意：创建实例的任务交给这个静态方法
    static GetInstance = function (...params) {
        if(SingleJob.instance.length < 2){//注意，这里2就是允许实例化的最大数量
            SingleJob.instance.push(new SingleJob(...params))
        }
        return SingleJob.instance[SingleJob.instance.length-1];
    };

    jobFor = function () {
        console.log(this.job);
    }
}

function BaseDemo(props) {
    const job = SingleJob.GetInstance('程序员');
    const job2 = SingleJob.GetInstance('音乐家');
    const job3 = SingleJob.GetInstance('画家');
    job.jobFor();//'程序员'
    job2.jobFor();//'音乐家'
    job3.jobFor();//'音乐家'
    return <div></div>
}

export default BaseDemo;