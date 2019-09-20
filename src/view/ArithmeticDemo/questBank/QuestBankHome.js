import React from 'react';
import {Container} from "../../../component";
import QuestItem from './QuestItem';

function QuestBankHome(props) {
    return <Container header='题库'>
        <QuestItem tit='1.两数之和' demo='1' memo='不允许出现两个重复的下标' level='C'
                   des='给定一个整数数组nums和一个目标值target，在数组中找出和为目标值的两个整数，并返回数组下标'/>
        <QuestItem tit='2.无重复字符的最长字串' demo='2' level='B'
                   des='给定一个字符串，请找出其中不含有重复字符的 最长子串 的长度'/>
        <QuestItem tit='3.最长回文字串' demo='3' level='B'
                   des='给定一个字符串 s，找到 s 中最长的回文子串'/>
    </Container>
}

export default QuestBankHome;