import React, {useState} from 'react';
import './GuestList.less';
import {compare, mergeCn} from "../../../../../utils/publicFun";

function GuestList(props) {
    const [curGuest,setCurGuest] = useState(props.data[0]);

    return <div className='guest_list'>
        <GuestItem data={genTitData()}/>
        {props.data.map((el,i)=><GuestItem data={el} key={i} isCurGuest={isCurGuest(el)}/>)}
    </div>;

    function isCurGuest(guest) {
        return compare(curGuest,guest,['name']);
    }

    function genTitData() {
        return {
            name:'姓名',
            money:'财产'
        }
    }
}

function GuestItem(props) {
    const {data} = props;

    return <div className={cnFor()}>
        <span className="guest_cell"> {data.name} </span>
        <span className="guest_cell"> {data.money} </span>
    </div>;

    function cnFor() {
        return mergeCn("guest_item",props.isCurGuest&&'current')
    }
}
GuestItem.defaultProps={
    isCurGuest:false
}
export default GuestList;