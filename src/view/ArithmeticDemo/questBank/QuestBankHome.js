import React from 'react';
import {Container} from "../../../component";
import QuestItem from './QuestItem';

function QuestBankHome(props) {
    return <Container header='题库'>
        <QuestItem tit='1.两数之和' demo='1' memo='不允许出现两个重复的下标' level='C'>给定一个整数数组nums和一个目标值target，在数组中找出和为目标值的两个整数，并返回数组下标</QuestItem>
        <QuestItem tit='2.无重复字符的最长字串' demo='2' level='B'>给定一个字符串，请找出其中不含有重复字符的 最长子串 的长度</QuestItem>
        <QuestItem tit='3.最长回文字串' demo='3' level='B'>给定一个字符串 s，找到 s 中最长的回文子串</QuestItem>
        <QuestItem tit='4.整数反转' demo='4' level='C' memo='溢出返回0'>给出一个32位的有符号整数，为这个整数的每个数字进行翻转</QuestItem>
        <QuestItem tit='5.回文数'  demo='5' level='C'>判断一个整数是否是回文数，返回true/false</QuestItem>
        <QuestItem tit='6.有效的数独'  demo='6' level='B'>
            <p>判断一9*9的数独是否有效，遵循以下规则：</p>
            <p>1. 数字1-9一行只能出现一次</p>
            <p>2. 数字1-9一列只能出现一次</p>
            <p>3. 数字1-9在九宫格内只出现一次【每三行三列为九宫格，不重叠!】</p>
        </QuestItem>
    </Container>
}

export default QuestBankHome;