export default class IndexedDbClient{
    constructor(dbName='dbDefault',version=1,storeName='storeDefault',keys=[]){
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

    query = (key,value,callback)=>{
        const request = this.store().index(key).get(value);
        request.onsuccess=()=>{
            const res = request.result;
            console.log('数据查询成功',res);
            if(callback) return callback(res);
        };
        request.onerror= ()=>{
            console.error('查询失败')
        }
    }
}