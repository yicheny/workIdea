import React, {useEffect} from 'react';

function BreadcrumdTest2Next(props) {
    useEffect(()=>{
        props.setName('/cDemo/bread/demo2','demo2页面修改成功');
        props.setName('/cDemo/bread/demo2/:id','demo2Next页面修改成功');
    },[]);
    return <div>demo2Next页面</div>
}

export default BreadcrumdTest2Next;