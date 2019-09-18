import React,{useState,createRef} from 'react';
import './RedLine.less';
import {rivalStaffs} from "./redLineData/GenRivalData";
import {guests} from "./redLineData/GenGuestData";
import {staffs} from "./redLineData/GenMyStaffData";
import {orderBy} from "../../../../utils/publicFun";
import {Button} from "../../../../component";
import StaffArea from "./redLineComponent/staffArea";
import GuestGraph from "./redLineComponent/GuestGraph";
import GuestList from "./redLineComponent/GuestList";

const MAX_VALUE= 9999;

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
        guestMove();
        // setCps(getNewCps());

        function selectStaff(staffs) {
            return orderBy(staffs, 'looks')[0];
        }

        function guestMove() {
            const [x1,y1] = coordinateFor(selectStaff([myStaff,rivalStaff]));
            const [x2,y2] = coordinateFor(guestRef.current);
            guestRef.current.style.transform = `translate(${x1-x2}px,${y1-y2}px)`;
            // autoHidden();

            function autoHidden() {
                return setTimeout(()=>{
                    guestRef.current.style.visibility = 'hidden';
                },1200);
            }
            function coordinateFor(box) {
                const x1 = box.offsetLeft + (box.clientWidth/2);
                const y1 = box.offsetTop + (box.clientHeight/2);

                return [x1,y1];
            }
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
        setRes(total);


        function gainRadioFor(value){
            return Math.round(value/MAX_VALUE);
        }
    }
}

export default RedLine;