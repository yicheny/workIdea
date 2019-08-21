import React from 'react';
import './FriedGoldenFlower.less';
import {Container} from "../../../component";

function FriedGoldenFlower(props) {
    return <Container className="x_fried" header='炸金花'>
        <ul>
            {creCards().map((el,i)=><li key={i} style={{padding:'6px 0'}}>{el}</li>)}
        </ul>
    </Container>;

    function creCards() {
        const cards = [];
        const flowerColors = ['红桃','黑桃','梅花','方块'];
        const cardValues =  ['3','4','5','6','7','8','9','J','Q','K','A','2'];
        const kings = ['大王','小王'];

        flowerColors.forEach(el=>{
            cardValues.forEach(el2=>{
                cards.push(el + el2);
            })
        });
        cards.concat(kings);

        return cards;
    }

}

export default FriedGoldenFlower;