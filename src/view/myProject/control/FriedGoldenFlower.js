import React,{useReducer} from 'react';
import './FriedGoldenFlower.less';
import {Container} from "../../../component";
import PkCard from "../../../component/PkCard/PkCard";
import {crePkCards} from "../../../utils/pkFun";
import Deck from "./PKSrc/Deck";

const cards = crePkCards({isRandom:true});

function FriedGoldenFlower(props) {
    const [, forceUpdate] = useReducer(x => x + 1, 0);//hook下替代forceUpdate方案

    return <Container header='炸金花'>
        <div className="x_fried">
            <Deck data={cards}/>
        </div>
    </Container>;
}

export default FriedGoldenFlower;