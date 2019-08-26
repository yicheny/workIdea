import React,{useState} from 'react';
import {Container} from "../../../../component";
import {WkCard,WkCardBox} from "./WkCard";

function Demo(props) {
    const {user,setUser} = useState('A');

    return <Container header='卡片'>
        <div className="wolfKill_demo">
            <WkCardBox data={creUser()}/>
        </div>
    </Container>;

    function creUser() {
        return ['A','B','C','D','E','F','G','H','I','J','K','L']
    }
}

export default Demo;