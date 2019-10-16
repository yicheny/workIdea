import React, {useEffect, useState} from 'react';
import {Container, Button, TextInput} from "../../../component";
import {nil} from "../../../base/BaseVariate";
import {sample, genRandom,} from "../../../utils/publicFun";
import {PersonNameList} from "../baseData/BaseData";
import IndexedDbClient from "../../../base/IndexedDbClient";

let db = null;
let existsPersonNameList = [];

function GenPersonDemo(props) {
    const [person,setPerson] = useState({});
    const [name,setName]=useState('');

    useEffect(()=>{
        db = new IndexedDbClient('hugeSura',1,'persons',['name','sexy']);
    },[]);

    return <Container header='人物生成'>
        <Button onClick={()=>setPerson(genPerson())}>随机人物</Button>
        <Button type='primary' onClick={comfireGen}>确认生成</Button>
        <Button onClick={()=>db.query('name',name)}>查询指定人物</Button>
        <Button onClick={()=>db.queryAll()}>查询全部人物</Button>
        <p>
            <TextInput placeholder='请输入人物姓名以便查询' onChange={setName}/>
        </p>
        <p style={{margin:'6px 0'}}>
            <TextInput placeholder='请输入人物姓名以便创建' onChange={v=>setPerson(genPerson({name:v}))}/>
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

    function genPerson(person={}) {
        const name = person.name || nameFor();
        const sexy = person.sexy || sample(['man','woman']);
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
            if (isAllUse()) return console.error('默认人物名称已全部被使用');
            const name = sample(PersonNameList);
            return existsPersonNameList.includes(name) ? nameFor() : name;

            function isAllUse(){
                return PersonNameList.every(item=>existsPersonNameList.includes(item))
            }
        }
    }
    function comfireGen() {
        db.queryAll('id',res=>{
            if(nil.includes(person.name)) return console.error('请输入人物名');

            existsPersonNameList = res.map((item)=>item.name);
            if(existsPersonNameList.includes(person.name)) return console.log('该人物已存在');
            return db.add(person)
        })
    }
}

export default GenPersonDemo;