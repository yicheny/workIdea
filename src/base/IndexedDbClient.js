export default class IndexedDbClient{
    constructor(setting){
        const {dbName='dbDefault',version=1,storeName='storeDefault',keys=[]} = setting;
        this.storeName = storeName;
        this.keys=keys;
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
            const store = db.createObjectStore(this.storeName, {
                keyPath: 'id',
                autoIncrement: true
            });

            // 设置索引项--方便快速查找
            store.createIndex('id', 'id', {unique: true});
            this.keys.forEach((key)=>{
                store.createIndex(key,key)
            })
        });
    };

    store = ()=>this.db.transaction([this.storeName], "readwrite").objectStore(this.storeName);

    add = (data)=>{
        const request = this.store().add(data);
        request.onsuccess = ()=>{
            console.log('数据添加成功')
        }
    };

    del = (id)=>{
        const request = this.store().delete(id);
        request.onsuccess= ()=>{
            console.log('数据删除成功')
        }
    };

    edit = (id,data)=>{
        const request = this.store().put({...data,id});
        request.onsuccess=()=>{
            console.log('数据编辑成功');
        }
    };

    //只会返回查询到的第一个对象
    query = (key='id',value=0,callback)=>{
        const request = this.store().index(key).get(value);
        request.onsuccess = ()=>{
            if(callback) return callback(request.result)
        };
    };

    //返回查询到的所有符合条件的对象
    queryAll = (key='id',callback)=>{
        const res = [];
        const request = this.store().index(key).openCursor();
        request.onsuccess = (event)=>{
            const cursor = event.target.result;
            if(cursor){
                res.push(cursor.value);
                return cursor.continue()
            }
            if(callback) return callback(res)
        };
    };

    //只会返回查询到的第一个对象_Sync
    querySync = (key='id',value=0)=>{
        return new Promise((resolve,reject)=>{
            const request = this.store().index(key).get(value);
            request.onsuccess = ()=>resolve(request.result);
        });

    };

    //返回查询到的所有符合条件的对象_Sync
    queryAllSync = (key='id')=>{
        return new Promise((resolve,reject)=>{
            const res = [];
            const request = this.store().index(key).openCursor();
            request.onsuccess = (event)=>{
                const cursor = event.target.result;
                if(cursor){
                    res.push(cursor.value);
                    return cursor.continue()
                }
                resolve(res);
            };
        });
    }
}


//openCursor有两个此参数
//第一个参数设置cursor范围匹配
//通过IDBKeyRange属性设置
// IDBKeyRange.only(1); //key===1
// IDBKeyRange.lowerBound(1) //key>=1
// IDBKeyRange.lowerBound(1,false) //key>=1
// IDBKeyRange.upperBound(2,true) //key<2
// IDBKeyRange.bound(0,10000,false,true);//key>=0 && key<10000
//第二个参数设置遍历顺序
//通过IDBCursor设置
//IDBCursor.NEXT 从前往后获取所有数据（包括重复数据）
//IDBCursor.PREV 从后往前获取所有数据（包括重复数据）
//IDBCursor.NEXTUNIQUE 从前往后获取数据（重复数据只取第一条，索引重复即认为重复，下同
//IDBCursor.PREVUNIQUE 从后往前获取数据（重复数据只取第一条）