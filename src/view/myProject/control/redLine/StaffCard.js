import React from 'react';
import './StaffCard.less';
import {mergeCn} from "../../../../utils/publicFun";

function StaffCard(props) {
    const {isRival,className,...rest} = props;

    return <div className={cnFor()} {...rest}>
        <p className="staff_name"> {props.data.name} </p>
        <p> 外形：{props.data.looks} </p>
        <p> 技能：{props.data.skill} </p>
        <p> 抗压：{props.data.spirit} </p>
    </div>;

    function cnFor() {
        return mergeCn('staff flex-y center',className,isRival&&'rival')
    }
}

StaffCard.defalutProps={
    isRival:false,
    className:''
};

export default StaffCard;