import React, {useMemo, useState} from 'react';
import {Container, Button, TextInput} from "../../../../component";
import {random} from "../../../../utils/publicFun";
import IndexedDbClient from '../../../../base/IndexedDbClient';

function IndexedDbDemo(props) {
    const [id,setId] = useState(0);
    const [name,setName] = useState(0);
    let db = useMemo(()=>new IndexedDbClient({
        dbName:'project1',
        version:1,
        storeName:'store1',
        keys:['name','age','hp']
    }),[]);

    return <Container header='IndexedDbDemo'>
        <p>请设置Id：<TextInput type='number' onChange={v=>setId(Number(v))}/></p>
        <p style={{margin:'8px 0'}}>请设置Name：<TextInput onChange={v=>setName(Number(v))}/></p>
        <p className='mar_wrap'>
            <Button type='primary' onClick={()=>db.add(genData())}>新增数据</Button>
            <Button type='primary' onClick={()=>db.del(id)}>删除数据</Button>
            <Button type='primary' onClick={()=>db.edit(id,genData())}>编辑数据</Button>
        </p>
        <p className='mar_wrap'>
            <Button type='primary' onClick={()=>db.query('id', id,(res)=>console.log(res))}>根据Id查询</Button>
            <Button type='primary' onClick={()=>db.query('name',name,(res)=>console.log(res))}>姓名查询</Button>
            <Button type='primary' onClick={()=>db.queryAll('id',(res)=>console.log(res))}>查询所有</Button>
        </p>
        <p className='mar_wrap'>
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
            name:random(0,10000),
            age:random(10,90),
            hp:random(0,2000),
            children:[
                {
                    name:random(10000,20000)
                },
                {
                    name:random(20000,30000),
                    children:[
                        {
                            name:random(30000,40000)
                        }
                    ]
                }
            ]
        }
    }
}

export default IndexedDbDemo;