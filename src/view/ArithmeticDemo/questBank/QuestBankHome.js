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
        <QuestItem tit='4.整数反转' demo='4' level='C' memo='溢出返回0'
                   des='给出一个32位的有符号整数，为这个整数的每个数字进行翻转'/>
        <QuestItem tit='5.回文数'  demo='5' level='C'
                   des='判断一个整数是否是回文数，返回true/false'/>
    </Container>
}

export default QuestBankHome;