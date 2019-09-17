import React from 'react';
import './StaffCard.less';

function GuestCard(props) {
    return <div className='staff flex-y center'>
        <p className="staff_name"> {props.data.name} </p>
        <p> 金钱：{props.data.money} </p>
    </div>
}

export default GuestCard;