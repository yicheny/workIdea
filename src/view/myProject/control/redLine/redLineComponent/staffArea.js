import React, {useEffect, useState, createRef} from 'react';
import './StaffArea.less'
import StaffCard from "./StaffCard";
import {mergeCn} from "../../../../../utils/publicFun";

function StaffArea(props) {
    const [modal,setModal] = useState(false);
    const [curStaff,setCurStaff] = useState(props.data[0]);
    const staffRef = createRef();

    useEffect(()=>{
        getRefInfo();
        props.setStaff(curStaff);
    },[curStaff]);

    return <div className={cnFor()}>
        <StaffCard middleRef={staffRef} onClick={switchStaff} data={curStaff} isRival={props.isRival} className='curStaff'/>
        {modal && <StaffModal data={props.data} setCurStaff={setCurStaff} close={close}/>}
    </div>;

    function switchStaff() {
        if(props.isRival) return;
        setModal(true)
    }
    function close() {
        setModal(false)
    }
    function cnFor() {
        return mergeCn('staff_area flex-y center',props.isRival?'rival':'my')
    }
    function getRefInfo() {
        console.dir(staffRef.current);
    }
}
StaffArea.defaultProps={
    isRival:false
};

function StaffModal(props) {
    return <div className='staff_modal flex center'>
        <div className="staff_modal_main flex">
            {props.data.map((el,i)=><StaffCard data={el} key={i} onClick={()=>handleClick(el)}/>)}
        </div>
    </div>;

    function handleClick(staff) {
        props.setCurStaff(staff);
        props.close();
    }
}

export default StaffArea;