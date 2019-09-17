import React,{useState,createRef} from 'react';
import './RedLine.less';
import {staffs,rivalStaffs} from "./redLineData/ReadLineData";
import {guests} from "./redLineData/GenGuestData";
import {Button} from "../../../../component";
import StaffArea from "./redLineComponent/staffArea";
import GuestGraph from "./redLineComponent/GuestGraph";
import GuestList from "./redLineComponent/GuestList";

const MAX_VALUE= 24;

function RedLine(props) {
    const [cps,setCps] = useState([]);
    const [myStaff,setMyStaff] = useState(null);
    const [rivalStaff,setRivalStaff] = useState(null);
    const [res,setRes] = useState(0);

    const guestRef = createRef();

    return <div className='flex-y redLine fill'>
        <div className="redLine_staff flex">
            <StaffArea data={staffs} setStaff={setMyStaff}/>
            <StaffArea data={rivalStaffs} isRival={true} setStaff={setRivalStaff}/>
        </div>

        <div className="redLine_control flex">
            <div className=''>
                {guests.length && <GuestList data={guests}/>}
            </div>

            <div className="redLine_opera flex-y center">
                <div className="flex center">
                    <GuestGraph middleRef={guestRef}/>
                </div>

                <div className='flex-y'>
                    <Button type='primary' style={{width:132}} onClick={cpDeal}>点击进行交互</Button>
                    <Button type='primary' style={{width:132}} onClick={calculateRes}>结束交互，计算结果</Button>
                    {!!res&&<div>{res}</div>}
                </div>
            </div>
        </div>
    </div>;

    function cpDeal(e) {
        console.log(myStaff, rivalStaff);
        // guestMove();
        // setCps(getNewCps());

        function guestMove() {
            const x = -20;
            const y = -350;

            guestRef.current.style.transform = `translate(${x}px,${y}px)`;
            setTimeout(()=>{
                guestRef.current.style.visibility = 'hidden';
            },1200)
        }
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