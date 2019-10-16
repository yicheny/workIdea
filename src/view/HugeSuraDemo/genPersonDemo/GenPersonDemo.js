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
        <Button type='primary' onClick={editPerson}>修改人物</Button>
        <Button onClick={()=>db.query('name',name)}>查询指定人物</Button>
        <Button onClick={()=>db.queryAll('id',(res)=>console.log('查询全部人物执行成功',res))}>查询全部人物</Button>
        <p>
            <TextInput placeholder='请输入人物姓名以便查询' onChange={setName}/>
        </p>
        <p style={{margin:'6px 0'}}>
            <TextInput placeholder='请输入人物姓名以便创建或编辑' onChange={v=>setPerson(genPerson({name:v}))}/>
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
        if(!isInputName()) return;
        db.query('name', person.name,res=>{
            if(res) return console.error('该人物已存在，不可再创建');
            return db.add(person)
        })
    }
    function editPerson() {
        if(!isInputName()) return;
        db.query('name', person.name,res=>{
            if(nil.includes(res)) return console.error('该人物不存在,请先创建');
            return db.edit(res.id,person)
        })
    }
    function isInputName(){
        if(nil.includes(person.name)) return console.error('请输入人物名称');
        return true;
    }
}

export default GenPersonDemo;