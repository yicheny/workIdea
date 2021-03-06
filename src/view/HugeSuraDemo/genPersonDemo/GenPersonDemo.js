import React, {useMemo, useState} from 'react';
import {Container, Button, TextInput} from "../../../component";
import {sample, random, isNil,} from "../../../utils/publicFun";
import {PersonNameList} from "../baseData/BaseData";
import IndexedDbClient from "../../../base/IndexedDbClient";

function GenPersonDemo(props) {
    const [person,setPerson] = useState({});
    const [name,setName] = useState('');
    const db = useMemo(()=>new IndexedDbClient({
        dbName:'hugeSura',
        version:1,
        storeName:'persons',
        keys:['name','sexy']
    }),[]);

    return <Container header='人物生成'>
        <div className='mar_wrap'>
            <Button onClick={async ()=>setPerson(await genPerson())}>随机人物</Button>
            <Button type='primary' onClick={comfireGen}>确认生成</Button>
            <Button type='primary' onClick={editPerson}>修改人物</Button>
            <Button onClick={queryAll}>查询全部人物</Button>
        </div>
        <div className='mar_wrap_b'>
            <TextInput placeholder='请输入人物姓名' onChange={setName}/>
            <Button onClick={query}>查询指定人物</Button>
        </div>
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
        <div className='mar_wrap'>
            <Button type='primary' onClick={()=>setPerson({...person,sexy:'man'})}>设置性别为男</Button>
            <Button type='primary' onClick={()=>setPerson({...person,sexy:'woman'})}>设置性别为女</Button>
        </div>
        <div className='mar_wrap_b'>
            <p><TextInput placeholder='编辑人物姓名' onChange={(v)=>setPerson({...person,name:v})}/></p>
            <p><TextInput type='number' min={0} max={99} placeholder='编辑人物等级[0,99]' onChange={(v)=>setPerson({...person,level:v})}/></p>
            <p><TextInput type='number' min={20} max={100} placeholder='编辑人物生命[20,100]' onChange={(v)=>setPerson({...person,hp:v})}/></p>
            <p><TextInput type='number' min={0} max={20} placeholder='编辑人物攻击[0,20]' onChange={(v)=>setPerson({...person,attack:v})}/></p>
            <p><TextInput type='number' min={0} max={20} placeholder='编辑人物防御[0,20]' onChange={(v)=>setPerson({...person,defense:v})}/></p>
            <p><TextInput type='number' min={0} max={20} placeholder='编辑人物速度[0,20]' onChange={(v)=>setPerson({...person,speed:v})}/></p>
            <p><TextInput type='number' min={0} max={100} placeholder='编辑人物天赋[0,100] ！注意，此项影响自由点数' autoP onChange={(v)=>setPerson({...person,talent:v,freePoint:100-v})}/></p>
        </div>
    </Container>;
    async function query() {
        console.log('数据查询成功',await db.querySync('name', name));
    }
    async function queryAll() {
        console.log(await db.queryAllSync())
    }
    async function genPerson(person={}) {
        const name = person.name || await nameFor();
        const sexy = person.sexy || sample(['man','woman']);
        const talent = random(1,100);

        if(!check()) return {};
        return {
            name,
            level:1,
            sexy,
            hp:random(20,100),
            attack:random(0,20),
            defense:random(0,20),
            speed:random(0,20),
            talent,
            freePoint:100-talent,
        };

        async function nameFor() {
            const existsPersonNameList = (await db.queryAllSync()).map(item=>item.name);
            if (isAllUse()) return console.error('默认人物名称已全部被使用');
            const name = sample(PersonNameList);
            return existsPersonNameList.includes(name) ? nameFor() : name;

            function isAllUse(){
                return PersonNameList.every(item=>existsPersonNameList.includes(item))
            }
        }

        function check() {
            if(isNil(name)) return false;
        }
    }
    async function comfireGen() {
        if(!isInputName())return;
        const data = await db.querySync('name',person.name);
        if(data) return console.error('已存在该人物，不能在创建');
        db.add(person);
    }
    async function editPerson() {
        if(!isInputName())return;
        const data = await db.querySync('name',person.name);
        if(isNil(data)) return console.error('不存在该人物，请先创建人物');
        db.edit(data.id,person)
    }
    function isInputName() {
        if(isNil(person.name)) return console.error('请输入人物名称');
        return true;
    }
}

export default GenPersonDemo;