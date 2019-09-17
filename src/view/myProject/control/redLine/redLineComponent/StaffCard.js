import React from 'react';
import './StaffCard.less';
import {mergeCn} from "../../../../../utils/publicFun";

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
            if(value===0) return 'N';
            if(value>=1 && value<=3) return 'C';
            if(value>=4 && value<=6) return 'C+';
            if(value>=7 && value<=9) return 'B';
            if(value>=10 && value<=12) return 'B+';
            if(value>=13 && value<=15) return 'A';
            if(value>=16 && value<=18) return 'A+';
            if(value>=19 && value<=21) return 'S';
            if(value>=22 && value<=24) return 'S+';
        }

        function levelCnFor() {
            let levelCn = '';

            if(value===0) levelCn='N';
            if(value>=13 && value<=18) levelCn = 'A';
            if(value>=19 && value<=24) levelCn='S';

            return mergeCn("staff_level",levelCn)
        }
    }
}

StaffCard.defalutProps={
    isRival:false,
    className:''
};

export default StaffCard;