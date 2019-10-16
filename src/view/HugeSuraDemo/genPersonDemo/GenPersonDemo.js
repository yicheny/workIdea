import React, {useEffect, useState} from 'react';
import {Container, Button, TextInput} from "../../../component";
import {arrCompare, arrRandom, genRandom} from "../../../utils/publicFun";
import {PersonNameList} from "../baseData/BaseData";
import IndexedDbClient from "../../../base/IndexedDbClient";

let db = null;
const existsPersonNameList = [];

function GenPersonDemo(props) {
    const [person,setPerson] = useState({});
    const [name,setName]=useState('');

    useEffect(()=>{
        db = new IndexedDbClient('hugeSura',1,'persons',['name','sexy']);
    },[]);

    return <Container header='人物生成'>
        <Button onClick={()=>setPerson(randomPerson())}>随机人物</Button>
        <Button type='primary' onClick={genPerson}>确认生成</Button>
        <Button onClick={query}>查询人物</Button>
        <p>
            <TextInput placeholder='请输入人物姓名以便查询' onChange={setName}/>
        </p>
        <div>
            <p>姓名：{person.name}</p>
            <p>性别：{person.sexy}</p>
            <p>等级：{person.level}</p>
            <p>生命：{person.hp}</p>
            <p>攻击：{person.attack}</p>
            <p>防御：{person.defense}</p>
            <p>速度：{person.speed}</p>
            <p>天赋：{person.talent}</p>
            <p>自由点数：{person.freePoint}</p>
        </div>
    </Container>;

    function query() {
        db.queryAll();
    }
    function randomPerson(person={}) {
        const name = person.name || nameFor();
        const sexy = person.sexy || arrRandom(['man','woman']);
        const talent = genRandom(1,100);

        return {
            name,
            level:1,
            sexy,
            hp:genRandom(20,100),
            attack:genRandom(0,20),
            defense:genRandom(0,20),
            speed:genRandom(0,20),
            talent,
            freePoint:100-talent,
        };

        function nameFor() {
            if (arrCompare(existsPersonNameList,PersonNameList)) return console.error('人物名称已全部使用完成');
            const name = arrRandom(PersonNameList);
            return existsPersonNameList.includes(name) ? nameFor() : name;
        }
    }
    function genPerson() {
        db.add(person);
    }
}

export default GenPersonDemo;