import React, {useEffect, useState} from 'react';
import {Container, Button, TextInput} from "../../../component";
import {genRandom} from "../../../utils/publicFun";
import IndexedDbClient from '../../../base/IndexedDbClient';

let db = null;
function IndexedDbDemo(props) {
    const [id,setId] = useState(0);
    const [name,setName] = useState(0);

    useEffect(()=>{
        db = new IndexedDbClient('project1',1,'store1',['name','age','hp']);
    },[]);

    return <Container header='IndexedDbDemo'>
        <p>请设置Id：<TextInput type='number' onChange={v=>setId(Number(v))}/></p>
        <p style={{margin:'8px 0'}}>请设置Name：<TextInput onChange={v=>setName(Number(v))}/></p>
        <p>
            <Button type='primary' onClick={()=>db.add(genData())}>新增数据</Button>
            <Button type='primary' onClick={()=>db.del(id)}>删除数据</Button>
            <Button type='primary' onClick={()=>db.edit(id,genData())}>编辑数据</Button>
        </p>
        <p>
            <Button type='primary' onClick={()=>db.query('id', id,(res)=>console.log(res))}>根据Id查询</Button>
            <Button type='primary' onClick={()=>db.query('name',name,(res)=>console.log(res))}>姓名查询</Button>
            <Button type='primary' onClick={()=>db.queryAll('id',(res)=>console.log(res))}>查询所有</Button>
        </p>
        <p>
            <Button type='primary' onClick={()=>query('id')}>Id查询_Sync</Button>
            <Button type='primary' onClick={()=>query('name')}>姓名查询_Sync</Button>
            <Button type='primary' onClick={queryAll}>查询所有_Sync</Button>
        </p>
    </Container>;

    function query(type) {
        const queryMap = {
            id:async()=>{
                console.log(await db.querySync('id', id));
            },
            name:async()=>{
                console.log(await db.querySync('name',name));
            },
        };

        return queryMap[type]()
    }

    async function queryAll() {
        console.log(await db.queryAllSync());
    }

    function genData() {
        return {
            name:genRandom(0,10000),
            age:genRandom(10,90),
            hp:genRandom(0,2000),
            children:[
                {
                    name:genRandom(10000,20000)
                },
                {
                    name:genRandom(20000,30000),
                    children:[
                        {
                            name:genRandom(30000,40000)
                        }
                    ]
                }
            ]
        }
    }
}

export default IndexedDbDemo;