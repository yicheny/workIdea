import React,{useState} from 'react';
import {Container, Button, TextInput} from "../../../component";
import {genRandom} from "../../../utils/publicFun";

class IndexedDbClient{
    constructor(dbName='default',version=1){
        this.dbName = dbName;
        this.version = version;
        this.openDBRequest = window.indexedDB.open(dbName,version);
        this.clientDB();
    }

    clientDB = ()=>{
        this.openDBRequest.onerror = (event)=>{
            console.error('数据库连接失败',event)
        };
        this.openDBRequest.onsuccess = event =>{
            this.db = this.openDBRequest.result;
            console.log('数据库连接成功',this.db)
        };
        this.openDBRequest.onupgradeneeded = (event=>{
            console.log('onupgradeneeded触发');

            const db = event.target.result;

            // 创建一个数据库存储对象
            // 第一个参数设置存储空间的名称
            // 第二个参数：keyPath用于指定存储空间的某个属性作为获取时的key值使用，autoIncrement是否自增长
            const store = db.createObjectStore(this.dbName, {
                keyPath: 'id',
                autoIncrement: true
            });

            // 设置索引项--方便快速查找
            store.createIndex('id', 'id', {unique: true});
            store.createIndex('name','name')
        });
    };

    store = ()=>this.db.transaction(this.dbName, "readwrite").objectStore(this.dbName);

    add = (data)=>{
        const request = this.store().add(data);
        request.onsuccess = (event)=>{
            console.log('数据添加成功')
        }
    };

    del = (id)=>{
        const request = this.store().delete(id);
        request.onsuccess= (event)=>{
            console.log('数据删除成功')
        }
    };

    edit = (id,data)=>{
        const request = this.store().put({...data,id});
        request.onsuccess=()=>{
            console.log('数据编辑成功');
        }
    };

    query = (id)=>{
        const request = this.store().get(id);
        request.onsuccess = event =>{
            console.log('数据查询成功',request.result);
        };
    }
}

const db = new IndexedDbClient();
function IndexedDbDemo(props) {
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
            hp:genRandom(0,2000)
        }
    }
}

export default IndexedDbDemo;