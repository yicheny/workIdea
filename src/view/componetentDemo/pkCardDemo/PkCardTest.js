import React,{useReducer} from 'react';
import './PkCardTest.less';
import {Container} from "../../../component";
import PkCard from "../../../componentMy/PkCard/PkCard";
import {crePkCards} from "../../../utils/genPk";

const cards = crePkCards({isRandom:true});

function PkCardTest(props) {
    const [, forceUpdate] = useReducer(x => x + 1, 0);//hook下替代forceUpdate方案

    return <Container header='扑克牌'>
        <div className="x_fried">
            {cards.map((el,i)=><PkCard data={el} scale key={i} onClick={()=>cardClick(el)}/>)}
        </div>
    </Container>;

    function cardClick(o) {
        o.face='front';
        forceUpdate()
    }
}

export default PkCardTest;