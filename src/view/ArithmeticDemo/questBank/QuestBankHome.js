import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "../../../component";

function QuestBankHome(props) {
    return <Container header='题库'>
        <QuestItem tit='1.两数之和' demo='1' memo='不允许出现两个重复的下标'
                   des='给定一个整数数组nums和一个目标值target，在数组中找出和为目标值的两个整数，并返回数组下标'/>
    </Container>
}

function QuestItem(props) {
    const {tit,demo,des,memo} = props;

    return <div>
        <h3>{tit}</h3>
        <p>{des}</p>
        <p style={{color:'red'}}>备注：{memo}</p>
        <Link to={`/arithmetic/questBank/${demo}`}>Demo</Link>
    </div>;
}

export default QuestBankHome;