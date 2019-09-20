import React from 'react';
import {Link} from "react-router-dom";
import {Container} from "../../../component";

function QuestBankHome(props) {
    return <Container header='题库'>
        <QuestItem tit='1.两数之和' demo='1' memo='不允许出现两个重复的下标' level='C'
                   des='给定一个整数数组nums和一个目标值target，在数组中找出和为目标值的两个整数，并返回数组下标'/>
        <QuestItem tit='2.无重复字符的最长字串' demo='2' level='B'
                   des='给定一个字符串，请找出其中不含有重复字符的 最长子串 的长度'/>
    </Container>
}

function QuestItem(props) {
    const {tit, demo, des, memo,level} = props;

    return <div className='box'>
        <h3>{tit}</h3>
        <p style={{color: 'green'}}>难度：{levelFor()}</p>
        <p>{des}</p>
        {memo && <p style={{color: 'red'}}>备注：{memo}</p>}
        <Link to={`/arithmetic/questBank/${demo}`}>Demo</Link>
    </div>;

    function levelFor() {
        const levelMap={
            A:'困难',
            B:'中等',
            C:'简单'
        };

        return levelMap[level]
    }
}
QuestItem.defaultProps={
    memo:null
};

export default QuestBankHome;