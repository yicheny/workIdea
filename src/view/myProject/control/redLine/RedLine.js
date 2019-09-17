import React,{useState} from 'react';
import './RedLine.less';
import {staffs,rivalStaffs,guests} from "./readLineData/ReadLineData";
import {Button} from "../../../../component";
import StaffArea from "./staffArea";
import GuestGraph from "./GuestGraph";

const MAX_VALUE= 24;

function RedLine(props) {
    const [cps,setCps] = useState([]);
    const [res,setRes] = useState(0);

    return <div className='flex-y redLine fill'>
        <div className="redLine_staff flex">
            <StaffArea data={staffs}/>
            <StaffArea data={rivalStaffs} isRival={true}/>
        </div>

        <div className="redLine_control flex">
            <div className='flex center'>客户区域</div>

            <div className="redLine_opera flex-y center">
                <div className="flex center">
                    <GuestGraph/>
                </div>

                <div className='flex-y'>
                    <Button type='primary' style={{width:132}} onClick={cpDeal}>点击进行交互</Button>
                    <Button type='primary' style={{width:132}} onClick={calculateRes}>结束交互，计算结果</Button>
                    {!!res&&<div>{res}</div>}
                </div>
            </div>
        </div>
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
            return value/MAX_VALUE;
        }
    }
}

export default RedLine;