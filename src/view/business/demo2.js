import React,{Fragment} from "react";
import {Data} from '../../data/business/data2';
import '../../asset/style/View/business/demo2.less';

export default class Demo2 extends React.Component{
    condSymMap = {
        '等于': '=',
        '不等于': '!=',
        '大于': '>',
        '小于': '<',
        '大于等于': '>=',
        '小于等于': '<=',
    };
    condValMap = {
        '区间':(v)=>`[${v[0]},${v[1]}]`,
        '区间%':(v)=>`[${v[0]}%,${v[1]}%]`,
    };

    render() {
        const data = Data().map(item=>Object.assign(item,{show:false}));//通过index可以很容易设置show,显隐控制可以轻松做到

        return <Fragment>
            {
                data.map((item,index) =>{
                    return <div key={index} className={item.show?'show':""}>
                        <span>{item.text}</span>
                        <span>{this.condSymMap[item.status] || item.status}</span>
                        <span>{Array.isArray(item.value)? this.condValMap[item.status](item.value) : item.value}</span>
                    </div>
                })
            }
        </Fragment>
    }
}