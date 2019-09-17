import React from 'react';
import './StaffCard.less';

function StaffCard(props) {
    const {...rest} = props;

    return <div className='staff flex-y center' {...rest}>
        <p className="staff_name"> {props.data.name} </p>
        <p> 外形：{props.data.looks} </p>
        <p> 技能：{props.data.skill} </p>
        <p> 抗压：{props.data.spirit} </p>
    </div>
}

export default StaffCard;