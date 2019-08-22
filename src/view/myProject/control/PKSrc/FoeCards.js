import React,{useReducer} from 'react';
import PkCard from "../../../../component/PkCard/PkCard";

function FoeCards(props) {
    const {user} = props;

    const [, forceUpdate] = useReducer(x => x + 1, 0);//hook下替代forceUpdate方案


    return <div className="pk_foeCards flex">
        {
            user.map((el,i)=><PkCard onClick={()=>cardClick(el)} data={el} key={i} scale/>)
        }
    </div>;

    function cardClick(el){
        const faceStrategy = {
            front:()=>el.face='back',
            back:()=>el.face='front'
        };

        faceStrategy[el.face]();
        forceUpdate()
    }
}

export default FoeCards;