import React, {useEffect, useState} from 'react';
import {Container, Button, TextInput} from "../../../component";
import {nil} from "../../../base/BaseVariate";
import {sample, genRandom,} from "../../../utils/publicFun";
import {PersonNameList} from "../baseData/BaseData";
import IndexedDbClient from "../../../base/IndexedDbClient";

let db = null;
// let existsPersonNameList = [];

function GenPersonDemo(props) {
    const [person,setPerson] = useState({});

    useEffect(()=>{
        db = new IndexedDbClient('hugeSura',1,'persons',['name','sexy']);
    },[]);

    return <Container header='人物生成'>
        <Button onClick={async ()=>setPerson(await genPerson())}>随机人物</Button>
        <Button type='primary' onClick={comfireGen}>确认生成</Button>
        <Button type='primary' onClick={editPerson}>修改人物</Button>
        <Button onClick={query}>查询指定人物</Button>
        <Button onClick={queryAll}>查询全部人物</Button>
        <p style={{margin:'6px 0'}}>
            <TextInput placeholder='请输入人物姓名' onChange={async v=>setPerson(await genPerson({name:v}))}/>
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
        <div>
            <Button type='primary' onClick={()=>setPerson({...person,sexy:'man'})}>设置性别为男</Button>
            <Button type='primary' onClick={()=>setPerson({...person,sexy:'woman'})}>设置性别为女</Button>
        </div>
    </Container>;
    async function query() {
        console.log('数据查询成功',await db.query('name', person.name));
    }
    async function queryAll() {
        console.log(await db.queryAll())
    }
    async function genPerson(person={}) {
        const name = person.name || await nameFor();
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

        async function nameFor() {
            const existsPersonNameList = (await db.queryAll()).map(item=>item.name);
            if (isAllUse()) return console.error('默认人物名称已全部被使用');
            const name = sample(PersonNameList);
            return existsPersonNameList.includes(name) ? nameFor() : name;

            function isAllUse(){
                return PersonNameList.every(item=>existsPersonNameList.includes(item))
            }
        }
    }
    async function comfireGen() {
        if(!isInputName())return;
        const data = await db.query('name',person.name);
        if(data) return console.error('已存在该人物，不能在创建');
        db.add(person);
    }
    async function editPerson() {
        if(!isInputName())return;
        const data = await db.query('name',person.name);
        if(nil.includes(data)) return console.error('不存在该人物，请先创建人物');
        db.edit(data.id,person)
    }
    function isInputName() {
        if(nil.includes(person.name)) return console.error('请输入人物名称');
        return true;
    }
}

export default GenPersonDemo;