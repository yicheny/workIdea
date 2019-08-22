import React,{useReducer,useState} from 'react';
import './FriedGoldenFlower.less';
import {Container} from "../../../component";
import PkCard from "../../../component/PkCard/PkCard";
import {crePkCards} from "../../../utils/pkFun";
import {chunk} from '../../../utils/publicFun';
import Deck from "./PKSrc/Deck";

const cards = crePkCards({isRandom:true});

function FriedGoldenFlower(props) {
    const [, forceUpdate] = useReducer(x => x + 1, 0);//hook下替代forceUpdate方案
    const [user1,setUser1] = useState([]);
    const [user2,setUser2] = useState([]);

    return <Container header='炸金花'>
        <div className="x_fried">
            <Deck data={cards} setCards={setPlayerCards} extraCount={6}/>

            {
                user1.map((el,i)=><PkCard onClick={()=>cardClick(el)} data={el} key={i} scale/>)
            }
            {
                user2.map((el,i)=><PkCard onClick={()=>cardClick(el)} data={el} key={i} scale/>)
            }
        </div>
    </Container>;

    function setPlayerCards(cards) {
        if(cards.length<6) return;

         cards = chunk(cards,3);
         setUser1(cards[0]);
         setUser2(cards[1])
    }

    function cardClick(el){
        const faceStrategy = {
            front:()=>el.face='back',
            back:()=>el.face='front'
        };

        faceStrategy[el.face]();
        forceUpdate()
    }
}

export default FriedGoldenFlower;