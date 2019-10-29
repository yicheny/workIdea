import React, {useState} from 'react';
import {Container, TextInput, Button, DropdownW} from "../../../component";
import CashFactory from './Calculate';
import {N2} from "../../../utils/format";

function SalesPromotion(props) {
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

    return <Container header='商场促销'>
        <div className="mar_wrap_b">
            <div>单价：<TextInput onChange={setPrice}/></div>
            <div>数量：<TextInput onChange={setCount}/></div>
            <div>促销方式：<DropdownW options={discounts} value='1' onChange={(e,o)=>setCbx(o)}/></div>
            <div style={{lineHeight:'32px'}}><Button onClick={totalFor}>点击获取结果</Button> 总计：{N2(total)}</div>
        </div>
    </Container>;

    function totalFor() {
        const {type,value} = cbx;
        const cash = new CashFactory(type).createCash();
        cash.money = price * count;
        if(type==='0') return setTotal(cash.totalFor());
        if(type==='1') return setTotal(cash.totalFor(value));
        if(type==='2') return setTotal(cash.totalFor(...(value.split(','))));
    }
}

export default SalesPromotion;