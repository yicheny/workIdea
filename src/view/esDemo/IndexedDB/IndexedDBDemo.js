import React,{useState} from 'react';
import {Container, Button, TextInput} from "../../../component";
import {genRandom} from "../../../utils/publicFun";
import IndexedDbClient from '../../../base/IndexedDbClient';

function IndexedDbDemo(props) {
    const db = new IndexedDbClient('project1',1,'store1');
    const [id,setId] = useState(0);

    return <Container header='IndexedDbDemo'>
        <p>请设置Id：<TextInput type='number' onChange={v=>setId(Number(v))}/></p>
        <Button type='primary' onClick={()=>db.add(genData())}>新增数据</Button>
        <Button type='primary' onClick={()=>db.edit(id,genData())}>编辑数据</Button>
        <Button type='primary' onClick={()=>db.query(id)}>查询数据</Button>
        <Button type='primary' onClick={()=>db.del(id)}>删除数据</Button>
    </Container>;
    
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