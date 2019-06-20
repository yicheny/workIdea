import React, {useEffect} from 'react';

function Demo3Next(props) {
    useEffect(()=>{
        props.setName('/wDemo/demo3','Demo3页面修改成功');
        props.setName('/wDemo/demo3/:id','Demo3Next页面修改成功');
    },[]);
    return <div>Demo3Next页面</div>
}

export default Demo3Next;