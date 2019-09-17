import React from 'react';
import './GuestList.less';

function GuestList(props) {
    return <div className='guest_list'>
        <GuestItem data={genTitData()}/>
        {props.data.map((el,i)=><GuestItem data={el} key={i}/>)}
    </div>;

    function genTitData() {
        return {
            name:'姓名',
            money:'财产'
        }
    }
}

function GuestItem(props) {
    const {data} = props;

    return <div className="guest_item">
        <span className="guest_cell"> {data.name} </span>
        <span className="guest_cell"> {data.money} </span>
    </div>
}
export default GuestList;