import React from 'react';
import './FriedGoldenFlower.less';
import {Container} from "../../../component";
import PkCard from "../../../component/PkCard/PkCard";

function FriedGoldenFlower(props) {
    // console.log(creCards());
    return <Container header='炸金花'>
        <div className="x_fried">
            {/*<PkCard data={creCards()[0]}/>*/}
            {creCards().map((el,i)=><PkCard graph={el.graph} value={el.value} face={el.face} key={i}/>)}
            {/*<ul style={{margin:0}}>
            {creCards().map((el,i)=><li key={i} style={{padding:'6px 0'}}>{el}</li>)}
             </ul>*/}
        </div>
    </Container>;

    function creCards() {
        const cards = [];
        const flowerColors = ['hearts','spade','plum','diamonds'];//红桃、黑桃、梅花、方块;
        const cardValues =  ['3','4','5','6','7','8','9','10','J','Q','K','A','2'];
        const kings = [{graph:'bigKing',value:'大王'},{graph:'smallKing',value:'小王'}];

        flowerColors.forEach(el=>{
            cardValues.forEach(el2=>{
                cards.push({
                    graph:el,
                    value:el2,
                    // face:'front'
                });
            })
        });

        return cards.concat(kings);
    }
}

export default FriedGoldenFlower;