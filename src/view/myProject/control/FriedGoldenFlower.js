import React,{useReducer} from 'react';
import './FriedGoldenFlower.less';
import {Container} from "../../../component";
import PkCard from "../../../component/PkCard/PkCard";
import {crePkCards} from "../../../utils/pkFun";

const cards = crePkCards({isRandom:true});

function FriedGoldenFlower(props) {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);//hook下替代forceUpdate方案

    return <Container header='炸金花'>
        <div className="x_fried">
            {cards.map((el,i)=><PkCard graph={el.graph} value={el.value} face={el.face} key={i} onClick={()=>cardClick(el)}/>)}
        </div>
    </Container>;

    function cardClick(o) {
        o.face='front';
        forceUpdate()
    }
}

export default FriedGoldenFlower;