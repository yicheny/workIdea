import React from 'react';
import './StaffCard.less';
import {mergeCn} from "../../../../utils/publicFun";

function StaffCard(props) {
    const {isRival,className,middleRef,onClick} = props;

    return <div className={cnFor()} onClick={onClick} ref={middleRef}>
        <p className="staff_name"> {props.data.name} </p>
        <p> 外形：{genLevelSpan(props.data.looks)}</p>
        <p> 技能：{genLevelSpan(props.data.skill)}</p>
        <p> 抗压：{genLevelSpan(props.data.spirit)}</p>
    </div>;

    function cnFor() {
        return mergeCn('staff flex-y center',className,isRival&&'rival')
    }
    
    function genLevelSpan(value) {
        return <span className={levelCnFor()}>{levelFor()}</span>;

        function levelFor() {
            if(value>=0 && value<=999) return 'N';
            if(value>=1000 && value<=1999) return 'C';
            if(value>=2000 && value<=2999) return 'C+';
            if(value>=3000 && value<=3999) return 'B';
            if(value>=4000 && value<=4999) return 'B+';
            if(value>=5000 && value<=5999) return 'A';
            if(value>=6000 && value<=6999) return 'A+';
            if(value>=7000 && value<=7999) return 'S';
            if(value>=8000 && value<=9999) return 'S+';
        }

        function levelCnFor() {
            let levelCn = '';

            if(value>0 && value<=999) levelCn='N';
            if(value>=5000 && value<=6999) levelCn = 'A';
            if(value>=7000 && value<=9999) levelCn='S';

            return mergeCn("staff_level",levelCn)
        }
    }
}

StaffCard.defalutProps={
    isRival:false,
    className:''
};

export default StaffCard;