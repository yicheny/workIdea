import React,{useState} from 'react';
import {staffs,rivalStaffs, guests} from "./ReadLineData";
import {Button} from "../../../../component";
import StaffArea from "./staffArea";

function RedLine(props) {
    const [cps,setCps] = useState([]);
    const [res,setRes] = useState(0);

    return <div style={{margin: 16}} className='flex center'>
        {!!res&&<div>{res}</div>}
        <div className='flex-y'>
            <Button type='primary' onClick={cpDeal}>点击进行交互</Button>
            <Button type='primary' onClick={calculateRes}>结束交互，计算结果</Button>
        </div>
        <StaffArea data={staffs}/>
        <StaffArea data={rivalStaffs} isRival={true}/>
        {/*<StaffCard data={staffs[0]}/>*/}
        {/*<GuestCard data={guests[0]}/>*/}
    </div>;

    function cpDeal() {
        setCps(getNewCps());

        function getNewCps() {
            cps.push({
                staff:staffs[0],
                guest:guests[0]
            });
            return [...cps];
        }
    }
    function calculateRes() {
        if(!cps.length) return;

        let total = cps.reduce((acc,el)=>{
            if(el.staff.spirit){
                acc += gainRadioFor(el.staff.skill)* el.guest.money;
            }
            return acc;
        },0);
        setRes(Math.round(total));


        function gainRadioFor(value){
            const maxValue = 24;
            return value/maxValue;
        }
    }
}

export default RedLine;