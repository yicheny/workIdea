import React, {useState} from 'react';
import './StaffArea.less'
import StaffCard from "./StaffCard";
import {Button} from "../../../../component";

function StaffArea(props) {
    const [modal,setModal] = useState(false);
    const [curStaff,setCurStaff] = useState(props.data[0]);

    return <div className='flex-y center'>
        <StaffCard data={curStaff}/>
        <Button type='primary' onClick={()=>setModal(true)}>切换员工</Button>
        {modal && <StaffModal data={props.data} setCurStaff={setCurStaff} close={close}/>}
    </div>;

    function close() {
        setModal(false)
    }
}

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