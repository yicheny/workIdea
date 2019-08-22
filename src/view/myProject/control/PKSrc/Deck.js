import React,{useRef,useReducer} from "react";
import PkCard from "../../../../component/PkCard/PkCard";
import './Deck.less';

function Deck(props) {
    const {data} = props;
    let cardData = useRef([...data]);
    const [, forceUpdate] = useReducer(x => x + 1, 0);//hook下替代forceUpdate方案

    return <div className="x_deck">
        <div className="x_deck_header flex center">
            剩余卡牌数：<span className="card_count">{cardData.current.length}</span>
        </div>
        <div className="x_deck_content flex center">
            {
                !!cardData.current.length && cardData.current.map((el,i)=><PkCard data={el} style={setLayout(i)} key={i} onClick={cardClick}/>)
            }

            <div className="card_empty">
                牌组清空
            </div>
        </div>
    </div>;

    function setLayout(i) {
        return {top:`${-0.35*i + 24}px`,right:`${-0.35*i + 28}px`}
    }
    function cardClick() {
        if(cardData.current.length>20){
            cardData.current.shift();
        }else{
            cardData.current = [...data];
        }
        return forceUpdate();
    }
}
Deck.defalutProps={
    data:[]
};

export default Deck;