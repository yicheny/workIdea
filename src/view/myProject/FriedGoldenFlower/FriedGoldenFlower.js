import React,{useState} from 'react';
import './FriedGoldenFlower.less';
import {Container} from "../../../component";
import {crePkCards} from "../../../utils/genPk";
import {chunk} from '../../../utils/publicFun';
import Deck from "../PKSrc/Deck";
import MyCards from "../PKSrc/MyCards";
import FoeCards from "../PKSrc/FoeCards";

const cards = crePkCards({isRandom:true});

function FriedGoldenFlower(props) {
    const [user1,setUser1] = useState([]);
    const [user2,setUser2] = useState([]);

    return <Container header='炸金花'>
        <div className="x_fried flex">
            <div className="users">
                <MyCards user={user1}/>
                <FoeCards user={user2}/>
            </div>
            <Deck data={cards} setCards={setPlayerCards} extraCount={6}/>
        </div>
    </Container>;

    function setPlayerCards(cards) {
        if(cards.length<6) return;

         cards = chunk(cards,3);
         setUser1(cards[0]);
         setUser2(cards[1])
    }
}

export default FriedGoldenFlower;