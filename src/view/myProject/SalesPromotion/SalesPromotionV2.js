import React, {useState} from 'react';
import {Button, Container, DropdownW, TextInput} from "../../../component";
import {N2} from "../../../utils/format";
import {CashContext} from "./CalculateV2";

function SalesPromotionV2(props) {
    const discounts = [
        {value:'1',text:'正常收费',type:'0'},
        {value:'0.8',text:'打八折',type:'1'},
        {value:'0.7',text:'打七折',type:'1'},
        {value:'300,100',text:'满300返100',type:'2'},
        {value:'500,200',text:'满500返200',type:'2'},
    ];

    const [price,setPrice] = useState('');
    const [count,setCount] = useState('');
    const [cbx,setCbx] = useState(discounts[0]);
    const [total,setTotal] = useState('');

    return <Container header='商场促销_策略模式'>
        <div className="mar_wrap_b">
            <div>单价：<TextInput onChange={setPrice}/></div>
            <div>数量：<TextInput onChange={setCount}/></div>
            <div>促销方式：<DropdownW options={discounts} value='1' onChange={(e,o)=>setCbx(o)}/></div>
            <div style={{lineHeight:'32px'}}><Button onClick={totalFor}>点击获取结果</Button> 总计：{N2(total)}</div>
        </div>
    </Container>;

    function totalFor() {
        const {type,value} = cbx;
        const cash = new CashContext(type);//注意这一行，策略模式相比于简单工厂模式要少一步调用...如果是较为严格的语言【如C++】，在这里使用策略模式会具有意义，因为会少一步对抽象算法策略类的认识，对于JS而言，这里意义不大，因为JS不关注父类...
        cash.money = price * count;
        return setTotal(cash.totalFor(value));
    }
}

export default SalesPromotionV2;