import {shuffle} from "./publicFun";

export function crePkCards(props) {
    const {isRandom=false,face='back'} = props;

    let cards = [];
    const flowerColors = ['hearts','spade','plum','diamonds'];//红桃、黑桃、梅花、方块;
    const cardValues =  ['3','4','5','6','7','8','9','10','J','Q','K','A','2'];
    const KingCards = creKingCards();

    flowerColors.forEach(el=>{
        cardValues.forEach(el2=>{
            cards.push({
                graph:el,
                value:el2,
                face
            });
        })
    });

    cards = cards.concat(KingCards);

    if(isRandom){
        cards = shuffle(cards)
    }

    return cards;

    function creKingCards() {
        return [
            {graph:'bigKing',value:'大王',face},
            {graph:'smallKing',value:'小王',face}
        ]
    }
}
//目前这种写法无效
// crePkCards.defalutProps={
//     isRandom: false,
//     face:'front' // back-反 front-正
// };